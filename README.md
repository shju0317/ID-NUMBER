[ 멋쟁이 사자처럼 🦁  프론트엔드 스쿨 6기 | **HTML/CSS 팀프로젝트** ]

# 프로젝트 |&nbsp;&nbsp; <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/4e893c53-c256-4b81-9c5e-4511ee48a13e" width="25px"/> TAING
### 🔗&nbsp; 배포 주소 : https://taing.netlify.app/

</br>

OTT 서비스 웹사이트를 반응형으로 구현합니다.

</br>

![main_work](https://github.com/M-Moong/ID-NUMBER/assets/105577805/29e1de36-2166-416a-b4aa-81bcbf238b80)


</br>


# 📄 목차

1. [팀 소개 | 13조 주민등록번호](#-팀-소개--13조-주민등록번호)
2. [개발 기간](#-개발-기간)
3. [구현 페이지](#️-구현-페이지)
4. [기술 스택](#️-기술-스택)
5. [코딩 컨벤션](#-코딩-컨벤션)
6. [코드 리뷰](#ℹ️-코드-리뷰--주요-이슈)
   
   1. [주요 이슈](#ℹ️-코드-리뷰--주요-이슈)
   2. [메인 페이지](#ℹ️-코드-리뷰--메인-페이지)
   3. [로그인 관련 페이지](#ℹ️-코드-리뷰--로그인-관련-페이지)
   
7. [문법 검사](#-문법-검사)
8. [크로스 브라우징](#-크로스-브라우징)
9. [성능 최적화](#️-성능-최적화)
10. [프로젝트 한줄평](#-프로젝트-한줄평)

</br>

# 👥 팀 소개 |&nbsp;&nbsp; 13조 주민등록번호


| 프로필 | 이름 | GitHub |
|:-------:|:----:|:------:|
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/3960e861-c116-4266-a7dc-bd1b857c7708" width="40" height="40"/>   |   신승민(팀장)  | https://github.com/M-Moong  |
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/254b3756-eeea-42c4-ac37-36dd04a5fd95" width="40" height="40"/>   |   고명현 | https://github.com/gobeeisfree  |
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/98abe1db-4633-4706-9b1a-c60ef550d4dd" width="40" height="40"/>   |   김다인  | https://github.com/kimInDa  |
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/eefd0654-e98c-4c08-a96b-fbf4c5be4d92" width="40" height="40"/>   |   신현주  | https://github.com/shju0317  |

</br>

# ⏰ 개발 기간
#### 2023년 6월 22일
- 아이스 브레이킹

#### 2023년 6월 23일
- 기술 스택, 코딩 컨벤션, 접근성 체크리스트, 구현 페이지 범위 확정
- 개발 환경 셋팅
- 파트 배분

#### 2023년 6월 24일 ~ 6월 25일
- 개인 파트 구현  

#### 2023년 6월 26일
- 개인 파트 함께 디버깅  

#### 2023년 6월 27일
- 모두의 작업물 merge & 디버깅
- 구현 페이지 추가 & 작업
- README 작성  

#### 2023년 6월 28일
- 과제 제출

</br>

# 🖥️ 구현 페이지

|   구분  | 모바일(320px) | 태블릿(768px) | 데스크톱(1920px) |
|:--------:|:-------:|:---:|:-:|
| **메인** | <img width="50px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/e1d17ffa-fbe9-4bc3-8d2c-abaef77d8759" /> | <img width="150px" height="400px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/e2a56b35-7770-456a-8ca7-f7f82873a166" /> | <img width="250px" height="500px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/dd6efcac-9750-4697-886e-bd3b9696fe2f" /> |
| **로그인** | <img width="120px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/85f056bf-4bb5-4982-b99a-5f2c968878b4" /> | <img width="250px" height="350px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/b156df2a-21ca-4339-9aa6-a890df451862" /> | <img width="500px" height="400px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/4d636646-7ca2-4207-9cab-d16292296d73" /> |
| **아이디 찾기** | <img width="120px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/28956956-81b9-476e-864d-66de12615b3c" /> | <img width="250px" height="350px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/190ff84c-36ed-44b1-84b4-d9a03fd25fdf" /> | <img width="500px" height="400px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/68056962-291c-454f-88b1-16bab3fa0e08" /> |
| **비밀번호 찾기** | <img width="120px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/53c9fd50-f37f-4bb4-b009-0339777ed0da" /> | <img width="250px" height="350px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/77921f4f-af36-40ec-accf-7a7281307c92" /> | <img width="500px" height="400px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/fb12391f-e39b-40ea-a54e-0bdc6e62e8c6" /> |
| **회원가입** | <img width="120px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/8be90aa3-f525-46f1-a4f5-559ae148030c" /> | <img width="250px" height="350px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/5461dcee-5da7-45a6-b2f7-90ee5db8d1cc" /> | <img width="500px" height="400px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/95de6c12-88da-4904-b061-7ddedfd94e09" /> |

</br>

# 🛠️ 기술 스택

#### HTML

<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/fd7807ea-6cdb-47e5-a0dd-b77db83b3415" width="28px"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" /> 


#### CSS

<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/bed6550a-a5b3-48e2-a6f7-b105c6bd3455" width="28px"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />&nbsp;&nbsp;&nbsp;<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/24ed357f-a194-4fb5-b1b4-00dc200d04d7" width="28px"/> <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=n&logoColor=white" />

#### Package Manager
<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/98668e2c-d97a-45d0-8f75-e14084e75d09" width="28px"/> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

#### Git
<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/91c4abfd-6805-45ee-8305-c72492bd1afc" width="28px"/> <img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=Git&logoColor=white" />&nbsp;&nbsp;&nbsp;<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/748d9e80-bf75-4d9a-bee3-4815ecaeb810" width="28px"/> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white" /> 

</br>


# 📖 코딩 컨벤션
>### CSS 프레임워크
>
>1. 주민등록번호조의 CSS 프레임워크는 Tailwind를 사용한다.

>### 네이밍 규칙
>
>1. 커스텀 CSS 클래스명은 **BEM 패턴**을 사용한다. (예시) `.form__input`
> 
>2. BEM패턴은 class에서 사용되는 방법론이므로 `id`나 `label`, `name` 에서는 **카멜케이스**를 사용한다.  

>### 들여쓰기 규칙
>1. tab 간격은 2칸으로 한다.
>   
>2. 줄바꿈은 각자의 작업 방식에 따라 자유롭게 한다.
>   
>3. CSS 주석 방식은  한 줄이든 여러줄이든 `/*  */` 로 한다.
>   
>4. 따옴표는 `“ “` 겹따옴표를 사용한다.

   
</br>


# ℹ️ 코드 리뷰 |&nbsp;&nbsp; 주요 이슈
## 반응형 스크린
```css
screens: {
  mobile: {'min': '320px', 'max': '767px'},
  tablet: {'min': '768px', 'max': '1199px'},
  desktop: {'min': '1200px', 'max': '1920px'}
}
```
- 모바일,태블릿, 데스크탑에 따른 반응형 스크린을 위하여 tailwind.config.js 파일에 각 스크린의 크기를 지정합니다.

</br>

## 메인 페이지 section별 횡스크롤
![scroll-test](https://github.com/M-Moong/ID-NUMBER/assets/105577805/1d760c00-cb87-4bff-ae92-80ce1c0c0ce0)

```html
<section>
  <h2>섹션별 제목</h2>
  <ul class="flex overflow-y-hidden scroll">
    <li class="shrink-0 w-[14.8vw] min-w-[139px] max-w-[285px]"><a href="#"><img /></a></li>
     .
     .
  </ul>
</section>
```
- 섹션 내 콘텐츠를 ``ul`` 또는 ``ol``을 사용하여 리스트화 합니다.
- ``ul`` 또는 ``ol``에 ``flex``를 사용하여 콘텐츠 리스트를 가로 정렬 합니다.
- 리스트 내부의 콘텐츠 ``li``가 부모 ``ul`` 또는 ``ol``의 범위를 벗어날 경우, 부모요소에 가려지면서 스크롤이 발생하도록 ``overflow-y-hidden`` 속성을 부여합니다.
- css 스타일링으로 화면상에서 스크롤바를 숨깁니다.
  ```css
  .scroll::-webkit-scrollbar {
    display: none;
  }
  ```
- 각 콘텐츠의 크기가 부모의 ``flex box`` 크기가 아닌 **뷰포트**에 따라 크기가 변화하도록 각 콘텐츠 ``li``에 ``shrink-0`` 속성을 부여하고 ``width`` 값을 vw단위로 지정합니다.

</br>

# ℹ️ 코드 리뷰 |&nbsp;&nbsp; 메인 페이지

## Head
```html
<title>TAING</title>
<meta name="description" content="타잉 오리지널 콘텐츠, 방송, 영화, 해외시리즈까지! 재미를 플레이해보세요.">
<link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon" />
```
- ``title``로 HTML 문서 전체의 제목을 나타냅니다.
- ``meta``의 ``content`` 속성으로 검색 엔진에서 해당 사이트의 정보를 표시하고 검색 될 수 있도록 합니다.
- ``link``의 ``shortcut icon`` 속성으로 파비콘을 설정하여 꾸며줍니다.

</br>

## Main
### header
![main_header_markup2](https://github.com/M-Moong/ID-NUMBER/assets/105577805/6efb15cb-bbd5-46e1-89ae-71ae254835d3)
- ``header``의 마크업 순서는 키보드 사용자와 스크린리더 사용자의 접근성을 고려하여 로고 제목, 검색, 네비게이션의 순서로 합니다.
- 시안의 순서로 바꾸어 주기 위해 ``header``에 ``flex``를 지정해주고 2번 ``ol``의 order를 2로 지정합니다.
- 1번 로고는 클릭 시 메인 페이지로 이동할 수 있어야 하므로 ``a``의 background-image로 넣어주고 ``aria-label``로 대체 텍스트 "타잉"을 지정합니다. 페이지의 대제목이 될 수 있도록 ``h1``을 부모요소로 합니다.
  ```html 
  <h1>
    <a href="#" aria-label="타잉" class="bg-[url('/images/icon-logo.svg')] bg-no-repeat"></a>
  </h1>
- 2번 검색 아이콘은 ``button``의 background-image로 넣어주고 ``aria-label``로 대체 텍스트 "검색"을 지정해 줍니다.
- 2번 프로필 사진은 클릭 시 마이페이지로 이동할 수 있도록 ``a``로 마크업 하고, background-image로 프로필 이미지를 넣어준 뒤 ``aria-label``로 대체 텍스트 "마이페이지"를 지정해 줍니다.
- 3번 네비게이션은 ``mobile:hidden``으로 모바일에서는 보이지 않게 합니다.
- 3번 네비게이션을 스크린리더 사용자에게 메인메뉴 임을 알려주기 위하여 ``<h2>메인메뉴</h2>``에 ``sr-only`` 속성을 사용합니다.
 
</br>

### 타이틀 배너
![title banner](https://github.com/M-Moong/ID-NUMBER/assets/125634564/283f2891-d0a8-49d7-82f6-81d4e670f9ec)
- `article` 태그 안 메인이 되는 이미지를 `figure` 태그안에 배치하고 `figcaption`으로 설명을 적어 배치합니다.
- 해당 이미지에 대한 `자세히보기 button` 첫번째, 다음으로 슬라이드 기능으로 동작할 `이전, 다음 화살표 모양 button` 그리고 마지막으로는 `pagination 기능을 할 button` 순으로 마크업 합니다.
- `이전, 다음 화살표 모양 button`은 해당 기능이 이미지의 좌·우의 각 세로 어디를 눌러도 동작할 수 있도록 height에 100%를 지정합니다.
- **접근성**
  - `이전, 다음 화살표 모양 button`에 `aria-label` 값으로 각각 `이전 슬라이드`, `다음 슬라이드`를 지정합니다.
  - `pagination 기능을 할 button`에 `aria-label` 값으로 각각 `n번째 슬라이드`를 지정합니다.
</br>


### 티빙에서 꼭 봐야되는 콘텐츠

<img width="862" alt="image" src="https://github.com/M-Moong/ID-NUMBER/assets/109510367/402ee07a-d960-4e82-84ce-590eb21ae693">

- ```h2```로 섹션의 제목을 구성했습니다.
- ```ol>li```로 각 이미지들의 리스트를 구현하였고, ```<a>```로 figure를 감싸 링크 형식으로 작성하였습니다.
- ```<img>```와 ```<figcaption>```을 ```<figure>```로 감싸 독립적으로 포스터에 제목을 나타냈습니다.
- 횡 스크롤은 ```overflow-y-hidden```을 주어 좌우 이동될수있게 표현하였습니다. [(section별 횡스크롤)](#메인-페이지-section별-횡스크롤)


</br>


### Quick VOD

<img width="1067" alt="image" src="https://github.com/M-Moong/ID-NUMBER/assets/109510367/131cc439-398d-4c37-94e5-4b131fa766df">

- ```h2```로 섹션의 제목을 구성했습니다.
- ```ol>li```로 각 이미지들의 리스트를 구현하였고, ```<a>```로 figure를 감싸 링크 형식으로 작성하였습니다.
- 포스터의 제목과 설명은 ```dl>(dt+dd)*2```의 구조로 ```dt```는 ```aria-label```로 숨김처리를 하였고, ```dd```가 무슨 역할인지 설명할수 있도록 작성하였습니다.

</br>


### 실시간 인기 프로그램
![favorite](https://github.com/M-Moong/ID-NUMBER/assets/125634564/0e719c88-a071-442c-a807-ea2ee6ca5757)
- 순위와 프로그램명을 a 태그 안에 배치해 링크 영역에 속할 수 있도록 합니다.
- 순위와 프로그램명을 `dl 태그`로 구성하고 화면에 보이지 않는 부분은 `dt 태그`, 보이는 부분은 `dd 태그`에 정의합니다.
  - `dt의 텍스트 노드에 빈 값`을 주고 aria-label에 각각 순위, 프로그램명 이라는 값을 줍니다.
    ```HTML
    <dl>
      <dt aria-label="순위"></dt>
      <dd>1</dd>
      <dt aria-label="프로그램명"></dt>
      <dd>황혼: 빛과 그림자</dd>
    </dl>
    ```
</br>


### 인기 LIVE 채널
![live](https://github.com/M-Moong/ID-NUMBER/assets/125634564/6fa5be9f-cab7-4945-994c-261a252b969d)
- 실시간 인기 프로그램 섹션과 동일한 구성으로 마크업
- 순위와 채널명, 프로그램명, 시청률을 a 태그 안에 배치해 링크 영역에 속할 수 있도록 합니다.
- 순위와 채널명, 프로그램명, 시청률을 `dl 태그`로 구성하고 화면에 보이지 않는 부분은 `dt 태그`, 보이는 부분은 `dd 태그`에 정의합니다.
  - `dt의 텍스트 노드에 빈 값`을 주고 aria-label에 각각 순위, 프로그램명 이라는 값을 줍니다.
    ```HTML
    <dl>
      <dt aria-label="순위"></dt>
      <dd>1</dd>
      <dt aria-label="채널명"></dt>
      <dd>JTBC</dd>
      <dt aria-label="프로그램명"></dt>
      <dd>JTBC 뉴스룸</dd>
      <dt aria-label="시청률"></dt>
      <dd>27.9%</dd>
    </dl>
    ```
</br>


### 오직 티빙에만 있어요, 이벤트

![only_markup](https://github.com/M-Moong/ID-NUMBER/assets/105577805/1490add0-b954-4be1-9868-38817a6dcd81)
![event_markup](https://github.com/M-Moong/ID-NUMBER/assets/105577805/5d3ce427-1ac0-4577-9b1e-d2647281e5ad)

``` html
<section>
  <h2>섹션 제목</h2>
  <ul class="flex gap-[10px] overflow-y-hidden scroll">
    <li class="shrink-0 w-[18vw] min-w-[145px] max-w-[346px]">
      <a href="#">
        <img src="이미지 경로" alt="대체 텍스트"/>
      </a>
    </li>
    .
    .
  </ul>
</section>
```
- ``section``의 제목을 ``h2``로 마크업 합니다. 
- 콘텐츠 목록은 순서가 없는 ``ul``과 ``li``로 마크업 합니다.
- 각 콘텐츠는 클릭 시 해당 프로그램의 정보 페이지로 넘어가야하므로 ``img``의 부모 요소로 ``a``를 마크업 합니다.
- ``ul``에 ``overflow-y-hidden`` 속성을 이용하여 횡스크롤이 생기도록 합니다. [(section별 횡스크롤)](#메인-페이지-section별-횡스크롤)
- ``img``의 ``alt`` 속성을 이용하여 스크린 리더 사용자에게 해당 이미지의 대체 텍스트를 줍니다.


</br>


### 광고

![광고](https://github.com/M-Moong/ID-NUMBER/assets/105577805/8138f150-00ae-4134-bc2b-e8d2da5debc5)

```html
<section class="mobile:pr-[8px] tablet:pr-[40px] desktop:pr-[70px] mobile:py-4 tablet:py-7 desktop:py-9 ">
  <h2 class="sr-only">광고</h2>
  <figure class="min-w-[304px] max-w-[1780px]">
    <img src="/images/sports-1.jpg" />
    <figcaption class="sr-only">타빙 스포츠 경기 생중계 UFC 월드복싱 슈퍼매치 분데스리가 AFC 챔피언스리그</figcaption>
  </figure>
</section>
```
- 해당 ``section``의 제목인 "광고"를 ``h2``로 마크업하고 ``sr-onyl(a11yHidden)`` 속성으로 스크린 리더에 정보를 제공하면서 화면에서는 숨깁니다.
- 광고 이미지는 ``figure``를 부모 요소로 하여 ``img``로 마크업 합니다.
- ``img``에 대한 대체 텍스트로 ``figcaption`` 을 마크업하고 화면에는 보이지 않도록  ``sr-onyl(a11yHidden)`` 속성을 부여합니다.

</br>


### footer

<img width="797" alt="image" src="https://github.com/M-Moong/ID-NUMBER/assets/109510367/fd6e0607-e5cb-41ca-8099-6097b59a397f">

- 가로 구분선의 위의 요소들은 ```flexbox```를 주어 좌우로 배치를 하였습니다.
- 가로 구분선은 아래요소의 ```border-top```을 주어 나타내었습니다.
- ```div>ol>li``` 도 ```flexbox```를 주어 가로로 배치를 하였고, 밑줄있는 요소는 ```a```태그의 ```underline```을 주어 밑줄을 표현하였습니다.
- ```mail```요소는 ```a``` 태그에 ```mailto```를 주어 바로 메일을 작성할수 있도록 하였습니다.
- 아래의 아이콘은 ```a``` 태그에 ```image```를 넣어 구현하였습니다.

</br>


</br>

# ℹ️ 코드 리뷰 |&nbsp;&nbsp; 로그인 관련 페이지
## 로그인

![login_markup](https://github.com/M-Moong/ID-NUMBER/assets/105577805/cf33bad4-7b5e-4423-97e8-3f7116632452)
- 로그인 페이지에는 서버로 전달되어야 하는 정보(아이디, 비밀번호 등)가 있기 때문에 ``form``태그로 마크업합니다.
- 아이디와 비밀번호 ``input``에 ``label``을 지정하여 어떤 입력란인지에 대한 정보를 제공합니다. ``label``에는 ``sr-only`` 클래스를 지정하여 스크린리더는 읽되 화면에는 보이지 않도록 합니다.
  ```html
    <!-- 아이디 -->
  <div class="w-[38vw] min-w-[288px] max-w-[732px] h-[5vw] min-h-[46px] max-h-[96px]">
    <label for="userId" class="sr-only">아이디</label>
    <input id="userId" name="userId" class=" form__input border p-4 outline-none rounded login__txt w-full h-full"
      type="text" placeholder="아이디" required />
    </div>
  ```
- ``border``를 지정하여 ``focus``를 받고 있는 요소를 알 수 있도록 합니다.
  ```css
  /* focus되면 빨간색 border 적용 */
  .form__input:focus{
  border: 2px solid #ff153c;
  }
  ``` 
- ``input``에 ``required``속성을 주어 아이디와 비밀번호를 입력하지 않고 버튼을 누를 경우 메시지를 띄우도록 합니다.
![image-2](https://github.com/M-Moong/ID-NUMBER/assets/105577805/c0aa8c30-795e-49de-bc2b-2421c3f6776f)

- ``background-image``로 체크이미지를 표현할 경우 해당 이미지에는 탭할 수 없습니다. 키보드로도 접근할 수 있도록 ``input``요소와 ``background-image``의 크기와 위치를 조정합니다. 
  </br>
  ![image-1](https://github.com/M-Moong/ID-NUMBER/assets/105577805/46f78e4b-bb9d-4f14-8de7-89a9061c6b40)
  ```html
    <!-- 자동 로그인 --> 
    <div class="flex relative mt-4 mb-10">
      <input
        class="auto-login appearance-none absolute top-1/2 -translate-y-1/2 w-[26px] h-[26px] checked:bg-checkbox-checked"
        type="checkbox" id="autoLogin" name="autoLogin" />
      <label for="autoLogin" class="pl-9 bg-checkbox-default bg-no-repeat bg-left text-lg">자동 로그인</label>
    </div>
  ```
- ``border-right``를 지정하여 `아이디 찾기`와 `비밀번호 찾기` 사이의 구분선을 표현합니다.
  
  ![image-3](https://github.com/M-Moong/ID-NUMBER/assets/105577805/c0d45c17-ada2-4196-bdd7-8e108d667412)

</br>

## 아이디 찾기
- ``input``을 ``type="email"``로 지정하여 이메일 형식으로 입력하지 않는 경우 메시지를 보여줍니다.
  
  ![image-5](https://github.com/M-Moong/ID-NUMBER/assets/105577805/db54c6a5-751a-4632-91b5-c0f5e1493d0f)

- ``before``와 ``after`` 가상요소를 사용하여 구분선을 표현합니다. 구분선이 가운데에 위치하도록 ``my-auto``를 지정합니다.
  ```html
  <!-- 구분선 -->
        <div class="flex w-[38vw] min-w-[288px] max-w-[732px] my-24 text-base text-gray-700 align-middle before:content-[''] before:flex-grow before:h-[1px] before:bg-gray-700 before:my-auto before:mr-4
        after:content-[''] after:flex-grow after:h-[1px] after:bg-gray-700 after:my-auto after:ml-4">또는</div>
  ```
  ![image-4](https://github.com/M-Moong/ID-NUMBER/assets/105577805/b26182dc-9d4e-43ee-bd3f-8527d8813a37)

</br>

## 비밀번호 찾기
- `form 태그` 안에 전체요소를 감싸는 `fieldset`으로 영역을 지정합니다.
- `legend`는 화면에 표시되지 않기 위해 `sr-only class를 추가`합니다.
- `div`으로 스타일링 할 영역을 감싸줍니다.
- `p 태그`에는 비밀번호 찾기에 대한 텍스트를 작성합니다.
- `sr-only 속성 추가`로 화면에 보이지 않는 `label 태그`와, placeholder에 `아이디`를 포함한 `input 태그`로 화면과 같이 구현합니다.

- ```HTML
  <form>
      <fieldset>
        <div>
          <p></p>
          <label></label>
          <input/>
          <button></button>
        </div>
      </fieldset>
  </form>
  ```
</br>

## 회원가입

<img width="538" alt="image" src="https://github.com/M-Moong/ID-NUMBER/assets/109510367/1d9e5fdd-97b1-4772-b6e8-4ea30b936ea0">

- ```form``` 태그에 ```flexbox```를 요소를 추가해 item들이 세로정렬을 할수 있게 구현하였습니다.
- ```Legend```와 ```p```태그를 이용하여 제목과 설명을 배치하였습니다.
- 아이디와 비밀번호 박스의 구성은 ```div>label+input+div```로 구성하여 배치하였습니다.
- 약관사항의 요소들은 ```flexbox```의 ```column```으로 배치하였습니다. 각 아이템들은 text는 ```label```로 구성하였고, ```checkbox```이미지는 ```input```으로 구성했습니다.
- ```input```의 타입은 ```checkbox```로 설정하였고, ```checked```시 이미지를 교체하여 체크표시가 되게끔 구현했습니다. 

</br>


# 🔎 문법 검사
구현한 페이지들에 문법 검사를 시행한 결과 에러가 없음을 확인합니다.
### 메인
![main_checker](https://github.com/M-Moong/ID-NUMBER/assets/105577805/d4d78509-9f92-428d-b480-8dcbfd8e622d)

### 로그인
![login_checker](https://github.com/M-Moong/ID-NUMBER/assets/105577805/ae3806c6-1d1f-40ee-8207-2caf8a1c3b84)

### 아이디 찾기 
![findId_checker](https://github.com/M-Moong/ID-NUMBER/assets/105577805/66a3c83b-217e-4501-a042-d7131604490d)

### 비밀번호 찾기
![findPassword_checker](https://github.com/M-Moong/ID-NUMBER/assets/105577805/4b9c3596-d3f0-4fef-b69f-84d7de33df41)

### 회원가입
![join_checker](https://github.com/M-Moong/ID-NUMBER/assets/105577805/1ec8abb9-4e69-4940-8500-c6c9451d5f9d)


</br>

# 💻 크로스 브라우징
각 모던 브라우저 Chrome, Firefox, Safari, Edge 환경에 맞춰 구현됨을 확인합니다.


| <img width="15" alt="browsers-chrome" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/5cde8ef4-6f95-4806-a289-b82b92da4ea6"> **Chrome** | <img width="15" alt="browsers-firefox" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/b90bf217-6fe6-414b-a769-dd7e7339a4a4"> **FireFox** | <img width="15" alt="browsers-safari" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/ba710b63-897c-46fc-977f-21c63bb0c3db"> **Safari** | <img width="15" alt="browsers-edge" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/fa7338c3-a674-43c1-9e6b-767d2b336228"> **Edge** |
|:----------:|:-----------:|:----------:|:--------:|
| <img width="150px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/f62df73c-461f-4901-b976-bc089083723b" /> | <img width="150px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/c6a5f379-b585-42a2-af07-2b78defb3fad" /> | <img width="150px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/0520d6c4-9bed-4965-acf1-9b3826b1c24c" style="padding:0" /> | <img width="150px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/f6b9df5d-9100-41d8-a0be-f057520cc221" />     |


</br>

# ⚙️ 성능 최적화

[Core Web Vitals](https://pagespeed.web.dev/?hl=ko)를 사용하여 웹사이트의 성능 최적화를 검사합니다.

### 데스크톱
![checker-desktop](https://github.com/M-Moong/ID-NUMBER/assets/105577805/fed2127d-abf8-4bbf-9d80-00a4ec5ad170)

### 휴대전화
![checker-mobile](https://github.com/M-Moong/ID-NUMBER/assets/105577805/8c3a00f4-1693-4248-86bf-677047c81774)

</br>

# 📝 프로젝트 한줄평

| 프로필 | 이름 | 한줄평 |
|:-------:|:----:|:------:|
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/3960e861-c116-4266-a7dc-bd1b857c7708" width="40" height="40"/>   |   신승민(팀장)  | 프로젝트를 통해 HTML과 CSS에 대해 좀더 고민할수 있는 시간을 가져서 좋았습니다. 그리고 다른 사람들과 하는 협업에 대해 많이 배운것 같습니다.  |
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/254b3756-eeea-42c4-ac37-36dd04a5fd95" width="40" height="40"/>   |   고명현 | UI 구현을 하며 아직 많이 부족하다는 것을 깨달았고, 그 부분을 좋은 팀원분들과 채워나갈 수 있는 좋은 시간이었습니다.  |
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/98abe1db-4633-4706-9b1a-c60ef550d4dd" width="40" height="40"/>   |   김다인  | 함께 길을 찾는 즐거움. |
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/eefd0654-e98c-4c08-a96b-fbf4c5be4d92" width="40" height="40"/>   |   신현주  | 프로젝트를 하며 협업에 대해 많이 알아가는 좋은 시간이었습니다.  |

</br>
