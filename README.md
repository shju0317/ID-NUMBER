[ 멋쟁이 사자처럼 🦁  프론트엔드 스쿨 6기 | **HTML/CSS 팀프로젝트** ]

# 프로젝트 |&nbsp;&nbsp; <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/4e893c53-c256-4b81-9c5e-4511ee48a13e" width="25px"/> TAING
### 🔗&nbsp; 배포 주소 : https://taing.netlify.app/

</br>

OTT 서비스 웹사이트를 반응형으로 구현합니다.

</br>

![project_main](https://github.com/M-Moong/ID-NUMBER/assets/105577805/39f92cf4-0812-43bd-ba84-a6322c2d155a)


</br>


# 📄 목차

1. [팀 소개 | 13조 주민등록번호](#-팀-소개--13조-주민등록번호)
2. [개발 기간](#-개발-기간)
3. [기술 스택](#️-기술-스택)
4. [코딩 컨벤션](#-코딩-컨벤션)
5. [코드 리뷰](#ℹ️-코드-리뷰--주요-이슈)
   
   1. [주요 이슈](#ℹ️-코드-리뷰--주요-이슈)
   2. [메인 페이지](#ℹ️-코드-리뷰--메인-페이지)
   3. [로그인 관련 페이지](#ℹ️-코드-리뷰--로그인-관련-페이지)
   
6. [문법 검사](#-문법-검사)
7. [크로스 브라우징](#-크로스-브라우징)
8. [성능 최적화](#️-성능-최적화)
9. [프로젝트 한줄평](#-프로젝트-한줄평)

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

# 🛠️ 기술 스택

#### HTML

<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/fd7807ea-6cdb-47e5-a0dd-b77db83b3415" width="28px"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" /> 


#### CSS

<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/24ed357f-a194-4fb5-b1b4-00dc200d04d7" width="28px"/> <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=Tailwind-CSS&logoColor=white" /> 

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
- ``ul``에 ``flex``를 사용하여 콘텐츠 리스트를 가로 정렬 합니다.
- 리스트 내부의 콘텐츠 ``li``가 리스트 부모`` ul`` 또는 ``ol``의 범위를 벗어날 경우, 부모요소에 가려지면서 스크롤이 발생하도록 ``overflow-y-hidden`` 속성을 부여합니다.
- css 스타일링으로 화면상에서 스크롤바를 숨깁니다.
  ```css
  .scroll::-webkit-scrollbar {
    display: none;
  }
  ```
- 각 콘텐츠의 크기가 부모의 ``flex box ``크기가 아닌 **뷰포트**에 따라 크기가 변화하도록 각 콘텐츠 ``li``에 ``shrink-0`` 속성을 부여하고``width`` 값을 vw단위로 지정합니다.

</br>

# ℹ️ 코드 리뷰 |&nbsp;&nbsp; 메인 페이지

## Head
```html
<title>TAING</title>
<meta name="description" content="타잉 오리지널 콘텐츠, 방송, 영화, 해외시리즈까지! 재미를 플레이해보세요.">
<link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon" />
```
- ``title``로 HTML 문서 전체의 제목을 나타냅니다.
- ``meta``의 ``content``속성으로 검색 엔진에서 해당 사이트의 정보를 표시하고 검색 될 수 있도록 합니다.
- ``link``의 ``shortcut icon``속성으로 파비콘을 설정하여 꾸며줍니다.

</br>

## Main
### header
![main_header_markup2](https://github.com/M-Moong/ID-NUMBER/assets/105577805/6efb15cb-bbd5-46e1-89ae-71ae254835d3)
- ``header``의 마크업 순서는 키보드 사용자와 스크린리더 사용자의 접근성을 고려하여 로고 제목, 검색, 네비게이션의 순서로 합니다.
- 시안의 순서로 바꾸어 주기 위해 ``header``에 ``flex``를 지정해주고 2번 ``ol``의 order를 2로 지정합니다.
- 1번 로고는 클릭 시 메인 페이지로 이동할 수 있어야 하므로 ``a``의 background-image로 넣어주고 ``aria-label``로 대체 텍스트 "타잉"을 지정합니다., 페이지의 대제목이 될 수 있도록 ``h1``을 부모요소로 합니다.
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

</br>


### 티빙에서 꼭 봐야되는 콘텐츠

</br>


### Quick VOD

</br>


### 실시간 인기 프로그램

</br>


### 인기 LIVE 채널

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

</br>


</br>

# ℹ️ 코드 리뷰 |&nbsp;&nbsp; 로그인 관련 페이지
## 로그인

</br>

## 아이디 찾기

</br>

## 비밀번호 찾기

</br>

## 회원가입

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


| <img width="15" alt="browsers-chrome" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/5cde8ef4-6f95-4806-a289-b82b92da4ea6"> **Chrome** | <img width="15" alt="browsers-firefox" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/b90bf217-6fe6-414b-a769-dd7e7339a4a4"> **FireFox수정** | <img width="15" alt="browsers-safari" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/ba710b63-897c-46fc-977f-21c63bb0c3db"> **Safari** | <img width="15" alt="browsers-edge" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/fa7338c3-a674-43c1-9e6b-767d2b336228"> **Edge수정** |
|:----------:|:-----------:|:----------:|:--------:|
| <img width="150px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/f62df73c-461f-4901-b976-bc089083723b" /> | <img width="150px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/f62df73c-461f-4901-b976-bc089083723b" /> | <img width="150px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/0520d6c4-9bed-4965-acf1-9b3826b1c24c" style="padding:0" /> | <img width="150px" height="300px" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/f62df73c-461f-4901-b976-bc089083723b" />     |


</br>

# ⚙️ 성능 최적화

[Core Web Vitals](https://pagespeed.web.dev/?hl=ko)를 사용하여 웹사이트의 성능 최적화를 검사합니다.

</br>

# 📝 프로젝트 한줄평

| 프로필 | 이름 | 한줄평 |
|:-------:|:----:|:------:|
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/3960e861-c116-4266-a7dc-bd1b857c7708" width="40" height="40"/>   |   신승민(팀장)  | 한줄평  |
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/254b3756-eeea-42c4-ac37-36dd04a5fd95" width="40" height="40"/>   |   고명현 | 한줄평  |
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/98abe1db-4633-4706-9b1a-c60ef550d4dd" width="40" height="40"/>   |   김다인  | 한줄평 |
|   <img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/eefd0654-e98c-4c08-a96b-fbf4c5be4d92" width="40" height="40"/>   |   신현주  | 한줄평  |

</br>
