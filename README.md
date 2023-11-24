# wait_bucket
---
### 버킷아 잠시만 기다려줘 서비스

# 기술스택
~~~
server: oracle clude free tier
back-end: nodeJS
front-end: nextJS + typescript

-> 오라클클라우드 가입 오류로 일단 모킹환경구성해서 작업한다..^^ㅠㅠ

~~~

## 프로젝트 생성 명령어 모음 (다음 프로젝트에서 까먹을것같아서 일단 적어둔다)
~~~
npx create-next-app@latest wait_bucket --typescript

✔ Would you like to use ESLint? … No / [Yes]
✔ Would you like to use Tailwind CSS? … [No] / Yes (필요하면 추가할예정)
✔ Would you like to use `src/` directory? … No / [Yes] (public폴더 두고 정적인파일 모으고싶음)
✔ Would you like to use App Router? (recommended) … No / [Yes]
✔ Would you like to customize the default import alias (@/*)? … No / [Yes]  - 폴더구조를 생각해둔게 있어서 @component 추가
✔ What import alias would you like configured? … @component/*

cd wait_bucket
mv * ../
mv .* ../
rmdir wait_bucket
~~~

### 기획부터 배포까지 모든걸 혼자 하다보니 draw.io로 작업하게되었다 [링크](https://app.diagrams.net/#G1gHRkVQwIO7IyHXJN_y9W7Tt8stH0KK6O)
<img width="1361" alt="image" src="https://github.com/KoGaYoung/wait_bucket/assets/36693355/b6ef4c3b-d497-46b2-8a8b-289557330cf1">
