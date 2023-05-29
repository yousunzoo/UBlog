![Intro](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPOe5r%2Fbtr1I93J13d%2F4GcuWA5Q13shXiRwQRkxQk%2Fimg.png)

input의 type을 number로 지정하지 않은 상태에서, input의 값이 number인지를 유효성 검사를 하려고 했다.

숫자가 아닌 값을 Number로 형변환해주면 NaN이 나오기 때문에, typeof Number(value) === 'NaN'을 시도해봤다.

```
console.log(Number('123eee')); // NaN
console.log(typeof Number('123eee')); // "number"
```

하지만 숫자이든 문자이든 간에 모든 값이 다 false로 뜬다. 실제로 형변환한 값을 console.log로 찍어보면 number가 나오는 것을 알 수 있다.

그렇다면 어떤 방법으로 데이터가 NaN인지 확인할 수 있을까?

---

#### 방법 1. isNaN( )

그거슨 바로, **isNaN()**

isNaN은 인수로 들어온 값이 NaN인지 판별하고 boolean 값을 반환한다.

나는 해당 예제에서 숫자인 값만 넘겨줄 것이기 때문에 isNaN 메서드를 사용해도 무방했다.

하지만 isNaN도 한계가 있다.

isNaN의 인수가 Number 타입이 아닌 경우, isNaN은 인수를 Number 타입으로 강제 형변환을 한다.

그리고 인수가 undefined일 경우에는 Number(undefined)으로 형변환하면 결국 NaN이 되어 true를 반환한다.

undefined 자료형을 신경쓰려면 **Number.isNaN()**을 사용하면 된다.

```
isNaN(undefined) // true
Number.isNaN(undefined) // false
```

---

#### 방법 2. Object.is( )

가장 좋은 방법은 **Object.is()** 메서드를 사용하는 것이다.

Object.is는 첫번째 인자와 두번째 인자가 같은 값인지를 결정한다.

```
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true

Object.is(null, null);       // true

// 특별한 경우
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```

#### 예제에 적용시킨 코드

```
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
    // 빈 문자열은 숫자형으로 변환시 0 반환!
      if (+seconds.current.value === 0) return
      setIsClicked(true)
      Object.is(NaN, +seconds.current.value) ? setIsCorrect(false) : setIsCorrect(true)
    }
  }
```

![outro](https://blog.kakaocdn.net/dn/5kk15/btr1UtNDDKv/JKlTC4Okak0ltGp9K0lzkK/img.gif)

잘 작동하는 것을 확인할 수 있다!
