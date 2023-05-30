## ❓ 메모이제이션이란?

​
메모이제이션(memoization)은 **컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술**이다. 메모이제이션을 절적히 적용하면 중복 연산을 피할 수 있기 때문에 메모리를 조금 더 쓰더라도 애플리케이션의 성능을 최적화할 수 있다.
​

## ✨ React.memo()

​
React.memo는 함수형 컴포넌트에 적용되어 같은 props에 같은 렌더링 결과를 제공한다.
​
컴포넌트가 **props로 동일한 결과를 렌더링**하면, React.memo를 호출하고 결과를 **메모이징(Memoizaing)**하도록 래핑하여 경우에 따라 성능 향상을 할 수 있다.
​
즉, React.memo를 사용하면 React는 컴포넌트를 재렌더링하지 않고 마지막으로 렌더링된 결과를 재사용한다.
​
React.memo는 props 변화에만 영향을 준다.
​
즉, 함수 컴포넌트 안에서 구현한 state나 context가 변할 때는 재렌더링된다.
​
props가 갖는 복잡한 객체에 대하여 **얕은 비교만을 수행하는 것이 기본 동작**이다.
​
다른 비교 동작을 원한다면, **두번째 인자로 별도의 비교 함수를 제공**하면 된다.
​

```
import React from "react";
​
function Hello(props) {
  return <div>hi</div>;
}
​
export default React.memo(Hello);
```

​

## ✨ useMemo

​
React에서는 useMemo라는 훅을 통해 연산된 값을 재사용하여 성능 최적화를 할 수 있다.
​
함수형 컴포넌트는 렌더링 ➡️ 컴포넌트 함수 호출 ➡️ 모든 내부 변수 초기화의 순서를 거친다.
​
컴포넌트는 렌더링이 될 때마다 변수가 초기화된다. 내부 변수에 함수가 할당되어 있다면, 렌더링 될 때마다 해당 함수가 반복적으로 실행되는 격이다. 이는 굉장히 비효율적이라고 볼 수 있다.
​
useMemo를 사용하게 되면 렌더링 ➡️ 컴포넌트 함수 호출 ➡️ memoize한 함수 재사용 순서를 거친다.
​
더 이상 해당 함수를 반복 실행할 필요 없이, 처음에 계산된 결과값을 메모리에 저장해서 컴포넌트가 반복적으로 렌더링되더라도 함수를 다시 호출하지 않고 메모리에서 결과값을 꺼내와서 재사용할 수 있게 한다.
​

### 📌 useMemo 구조

​

```jsx
const value = useMemo(callback, [deps]);
```

​
useMemo는 useEffect처럼 첫 번째 인자로 콜백 함수, 두 번째 인자로 의존성 배열을 받는다.
​
의존성 배열 안에 있는 값이 업데이트 될 때에만 콜백 함수를 다시 호출하여 메모리에 저장된 값을 업데이트 해준다.
​
만약 빈 배열을 넣는다면 useEffect와 마찬가지로 마운트 될 때에만 값을 계산하고 그 이후론 계속 memoization된 값을 꺼내와 사용한다.
​

### **📌** React.memo와 useMemo

​

- React.memo는 리액트의 HOC(Higher Order Component) 패턴, useMemo는 리액트 Hooks의 함수
- React.memo는 HOC이기 때문에 클래스형, 함수형 컴포넌트 모두 사용 가능 (but, 클래스형 컴포넌트에 사용하는 건 적절하지 않음!)  
   useMemo는 Hook이기 때문에 함수형 컴포넌트에서만 사용 가능
  ​

### 📌 useMemo, 과연 필요한가?

​

- useMemo는 처리량이 많을 때 사용해야 한다.
- 처리량이 매우 적은 경우 useMemo를 사용하면 추가 오버헤드가 발생할 수 있다.
- useMemo를 사용할 땐 Profiler 컴포넌트를 사용하여 성능을 측정하며 적용할 것!
  ​
  💻 관련 아티클 링크 : [https://github.com/yeonjuan/dev-blog/blob/master/JavaScript/should-you-really-use-usememo.md](https://github.com/yeonjuan/dev-blog/blob/master/JavaScript/should-you-really-use-usememo.md)
