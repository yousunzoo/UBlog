## **📚** Axios 라이브러리

- Axios는 브라우저, Node.js를 위한 Promise(ES6) API를 활용하는 HTTP 비동기 통신 라이브러리이다.
- 쉽게 말해서 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용한다.
- 이미 자바스크립트에는 fetch api가 있지만, ajax는 많은 기능을 지원하고 코드를 간소화할 수 있기 때문에 axios를 많이 사용한다.

### 📚 Axios의 특징

- json 변환을 자동으로 처리 (request.json() 을 해줄 필요가 없음. 바로 data 프로퍼티에 접근 가능)
- 요청에 대한 timeout 기능이 존재 (응답이 오기까지 대기할 최대 시간을 설정할 수 있음)
- 요청 및 응답에 대한 인터셉트 기능 존재 (기본적으로 요청을 보내기 전 혹은 응답을 받은 후 실행될 코드를 지정해놓을 수 있음)

#### 🧐 axios와 fetch의 차이

| **axios**                                       | **fetch**                                                      |
| ----------------------------------------------- | -------------------------------------------------------------- |
| 써드파티 라이브러리로 설치가 필요               | 현대 브라우저에 빌트인이라 설치 필요 없음                      |
| XSRF 보호를 해준다.                             | 별도 보호 없음                                                 |
| data 속성을 사용                                | body 속성을 사용                                               |
| data는 object를 포함한다                        | body는 문자열화 되어있다                                       |
| status가 200이고 statusText가 ‘OK’이면 성공이다 | 응답객체가 ok 속성을 포함하면 성공이다                         |
| 자동으로 JSON데이터 형식으로 변환된다           | .json()메서드를 사용해야 한다.                                 |
| 요청을 취소할 수 있고 타임아웃을 걸 수 있다.    | 해당 기능 존재 하지않음                                        |
| HTTP 요청을 가로챌수 있음                       | 기본적으로 제공하지 않음                                       |
| download 진행에 대해 기본적인 지원을 함         | 지원하지 않음                                                  |
| 좀더 많은 브라우저에 지원됨                     | Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+이상에 지원 |

### 💻 Axios 설치

설치는 아래와 같이 입력해서 진행할 수 있다. (모듈 이름이 axios)

```
#yarn
yarn add axios

#npm
npm install axios
```

모듈이기 때문에, 해당 함수를 사용하려면 import 처리해야 한다.

```
import axios from 'axios'
```

### 📚 Axios 기본 문법

```
axios({
  url: "서버주소",
  method: "get", // POST, PUT, DELETE 등의 요청 유형 선택
  headers: {
    Authorization: 인증 토큰 등
  },
  data: 리퀘스트 데이터,
  timeout: ms 단위
});
```

- method 부분에는 보내는 요청의 유형에 따라 get, post, put, delete 중 하나를 명시할 수 있다.
- data 부분에는 post 혹은 put 요청의 경우, 리퀘스트 데이터를 포함시켜서 보낼 수 있다.
- timeout 부분에는 명시한 시간 안에 요청이 안오면 시간 초과 에러를 발생시킬 수 있다.

### 📚 Axios 응답 데이터

```
response.data: {}, // 서버가 제공한 응답(데이터)

response.status: 200, // HTTP 상태 코드 (200~299 사이면 요청 성공, 400~500 사이라면 요청 실패)

response.statusText: 'OK',  // 서버에서 전달된 상태 메세지 (ok 등이 올 수 있음)

response.headers: {},  // 응답의 헤더 부분

response.config: {}, // axios 자체의 설정

response.request: {}
// 응답을 생성한 request
// 브라우저: XMLHttpRequest 인스턴스
// Node.js: ClientRequest 인스턴스(리디렉션)
```

### 📚 Axios 메소드

axios를 편리하게 사용하기 위해 모든 요청 메소드는 aliases가 제공된다.

- **GET** : axios.get(url\[, config\])
- **POST** : axios.post(url, data\[, config\])
- **PUT** : axios.put(url, data\[, config\])
- **DELETE** : axios.delete(url\[, config\])

#### 📥  GET

get 메서드에는 2가지 상황이 크게 존재한다.

1.  단순 데이터(페이지 요청, 지정된 요청) 요청을 수행할 경우
2.  파라미터 데이터를 포함시키는 경우 (사용자 번호에 따른 조회)

```
async function getUser() {
  try {
    const response = await axios.get('/user', {
    	params: {
        ID: 12345
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

위와 같이 옵션을 주는 방법도 있고, url에 파라미터로 전달하는 방법도 있다.

#### 📤  POST

post 메서드에는 일반적으로 데이터를 Message Body에 포함시켜 보낸다.

위에서 봤던 get 메서드에서 params를 사용한 경우와 비슷하게 수행된다.

```
async function uploadPost() {
  try {
    const response = await axios.post("url", {
		firstName: 'Seonju',
		lastName: 'Yoo'
    })
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

#### 🗑️ DELETE

delete 메서드는 일반적으로 body가 비어있다.

REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 삭제하는 목적으로 사용한다.

```
async function deletePost() {
  try {
    const response = await axios.delete('/user?ID=12345', {
    data: {
      post_id: 1,
      comment_id: 13,
      username: "foo"
    })
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

query나 params가 많아져서 헤더에 많은 정보를 담을 수 없을 때는 두 번째 인자에 data를 추가해줄 수 있다.

#### 📝 PUT

데이터베이스에 저장되어 있는 내용을 갱신(수정)하는 목적으로 사용된다.

put 메서드는 서버 내부적으로 get -> post 과정을 거치기 때문에 post 메서드와 비슷한 형태이다.

```
async function editPost() {
  try {
    const response = await axios.put("url", {
        username: "",
        password: ""
    })
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

### 📁 Axios 전역 설정 (Config Defaults)

모든 요청에 적용되는 설정의 default 값을 전역으로 명시할 수 있다.

보통 백엔드 주소는 고정되어 있기 때문에, 해당 주소를 요청을 보낼 때마다 명시하는 것은 비효율적이다.

해당 주소를 기본값으로 지정해놓고, 요청을 보낼 때 route 부분만 명시하는 방식으로 작성하면 훨씬 효율적으로 코드를 작성할 수 있다.

1\. 프로젝트 폴더에 .env 파일 생성

```
# .env
VITE_SERVER_URL='https://jsonplaceholder.typicode.com'
```

2\. axiosConfig.js 파일 내부의 axiosAPI 수정

```
export const axiosAPI = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
})
```

설정이 완료되면 .env 파일에 명시한 서버 주소로 API 요청을 보내게 된다.

3\. 인터셉터 활용하기

```
axios.interceptors.request.use(request => {
    console.log(request);
    // request 관련해서 설정 진행
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(
    (response) => {
    	// 정상적으로 처리되었을 때의 설정진행
        if (response.status === 200 || response.status === 201) {
            return response.data
        }
        return response
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    },
)
```

인터셉터는 말그대로 요청 혹은 응답을 보내는 과정에서 요청 혹은 응답을 가로채고 특정한 작업을 수정하기 위한 기능이다.

- request : 유저 인증 정보 존재 여부에 따라 유저 인증 정보를 요청에 포함시키기 위해 사용
- response : 데이터 파싱 등을 처리하기 위해 사용

인터셉터는 main.jsx 에 직접 명시할 수도 있고, axios 인스턴스를 따로 만들어서 명시할 수도 있다.

인터셉터 처리를 하면 axios 코드를 다음과 같이 줄일 수 있다.

```
const createPost = async (post) => {
    const data = await axios.post(`/posts`, post)
    return data
}
```
