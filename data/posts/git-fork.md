### 🌱 Github에 잔디 심는 것, 그것이 나의 즐거움. 그런데...!!

매일매일 TIL을 작성하고 미니 프로젝트를 만들면서 잔디를 심는 재미로 살고 있다.

푸릇푸릇한 잔디밭을 보면 내가 이만큼 열심히 공부했구나! 하고 뿌듯함을 느끼게 되기 때문에, 잔디밭에 대한 집착 아닌 집착으로 주말에도 조금씩이라도 공부하고 실습을 하고 있다.

요즘은 메가바이트스쿨 과제를 하느라 아주 정신없이 살고 있다. 열심히 작업해서 원격 저장소에 push push 했는데....?!

![github-image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQG1nz%2FbtrVTVim19X%2FzQsy2Y8vj70cdtkmeIXqb0%2Fimg.png)

롸..?

![절규](https://blog.kakaocdn.net/dn/3Vqz4/btrVUz6E05O/rb718znxyhk0kZIVEy4AY1/img.gif)

보다시피 잔디가 안 심겨져 있다...^,^ 도대체 왜 그런가 해서 검색을 해보니..

![github-guide](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbVy9i9%2FbtrVU8HPmQn%2F0crhwH1O9FXnLDJpEXCTp1%2Fimg.png)
[⬆️ 해당 페이지로 이동](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile)

<br>
잔디를 심기 위해서는 아래의 요건들이 충족되어야 한다.

- GitHub 계정과 commit 이메일 계정이 동일하거나
- commit이 fork한 repository가 아닌 나만의 repository에서 이뤄져야 한다.

나의 경우, Team Repository에서 fork 한 뒤 브랜치를 만들어서 작업을 진행했기 때문에 잔디가 심겨지지 않는 것이였다.

그럼 저의 푸릇푸릇한 잔디밭 로망은 이대로 산산조각 나는 것인가...😭

정답은 **_노옵-!_**

<br><br><br>

### 💗 오래 기다리셨습니다. 같이 잔디 심어봅시다!

새로운 repository를 생성하여 fork한 repository를 clone하는 방법은 그동안 작업한 커밋 내역이 싹 날아가버린다.

그럼 어떻게 해야하냐!

#### 1\. 내 Github에 새로운 Repository를 만든다.

Repository 명은 복사하고자 하는 repository와 다르게 하는게 좋다.

<br >

#### 2\. Git Bash를 열어 기존 Repository를 bare clone한다.

```
$ git clone --bare https://github.com/yousunzoo/old-repository.git
```

**🔹 bare** : 로컬 저장소에 Git Repository를 bare로 만든다.자체 $GIT_DIR을 이용하기 때문에 기본적으로 -n 옵션을 사용 working tree에 체크아웃할 곳이 없다.

- bare clone \-> branch를 직접 복사함

<br >

#### 3.새로운 Repository로 기존 Repository 파일들과 .git 폴더까지 Mirror-push 한다.

```
$ cd old-repository.git
$ git push --mirror https://github.com/yousunzoo/new-repository.git
```

**🔹mirror**: 원격 저장소(remote repository)의 복사본을 만든다. 이것은 --bare 옵션을 포함한다.

<br >

#### 4\. 로컬 저장소에서 기존 Repository 삭제

```
$ cd ..
$ rm -rf old-repository.git
```

![github-complete](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fde0Vmb%2FbtrVPGGiWuR%2FTlyHJT1XUVOu83ogKkvDT0%2Fimg.png)

깃허브에서 확인해보면 예쁘게 잔디가 심긴 것을 확인할 수 있다. ^\_\_\_^ V

![덩실덩실](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Frc3to%2FbtrVUmfunF4%2FhYgk5O5CvIKm0TUDH1nFLK%2Fimg.jpg)

그럼 푸릇푸릇한 잔디밭과 함께, 다들 오늘도 즐거운(....) 코딩하세요~!

---

#### 🗒️ 참고

[https://soranhan.tistory.com/11](https://soranhan.tistory.com/11)

[https://pinocc.tistory.com/138](https://pinocc.tistory.com/138)
