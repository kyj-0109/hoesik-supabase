# 랜덤 회식 장소 웹사이트 — Claude 인수인계

## 프로젝트 개요
赤坂·紀尾井町 지역의 회식 장소 82개를 검색하거나 랜덤 추첨(가챠)할 수 있는 Next.js 웹앱.

**배포 URL**: Vercel 프로젝트 `hoesik-supabase` (yejins-projects-0b736828 팀)
**로컬 경로**: `~/craft/hoesik-supabase`

---

## 기술 스택
- **Framework**: Next.js 16 (App Router, Server Components)
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` 방식), shadcn/ui 스타일 컴포넌트
- **UI 라이브러리**: Radix UI primitives (@radix-ui/react-slider, @radix-ui/react-toggle-group, @radix-ui/react-slot), class-variance-authority (CVA)
- **DB**: Supabase (PostgreSQL), 프로젝트 ID: `jpjyxsjgemogopznixgk`, region: ap-northeast-1
- **배포**: Vercel (GitHub 연동 예정 → kyj-0109/hoesik-supabase)
- **패키지 매니저**: pnpm

---

## 환경 변수
`.env.local`에 설정 (Vercel에도 동일하게 등록되어 있음):
```
NEXT_PUBLIC_SUPABASE_URL=https://jpjyxsjgemogopznixgk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwanl4c2pnZW1vZ29wem5peGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MTczMjIsImV4cCI6MjA4OTM5MzMyMn0.lch0JZiONcnFzQdiMeA716y8irHA-eiaQWP2J9M6KPI
```

---

## 디렉토리 구조
```
src/
├── app/
│   ├── page.tsx          # Server Component — getRestaurants + getMaxPeople 호출
│   ├── layout.tsx        # 시스템 폰트, 글로벌 CSS
│   └── globals.css       # Tailwind v4 @theme (라이트 테마 CSS 변수)
├── components/
│   ├── HomeClient.tsx    # 메인 클라이언트 컴포넌트 (상태 관리)
│   ├── Filters.tsx       # 필터 UI (장르·인원수·도보거리·식사시간)
│   ├── GenrePicker.tsx   # 장르 멀티선택 버튼
│   ├── MealToggle.tsx    # 런치/디너/상관없음 토글
│   ├── ModeTabs.tsx      # 검색 ↔ 가챠 탭 전환
│   ├── SearchResults.tsx # 검색 결과 목록
│   ├── RestaurantCard.tsx# 개별 레스토랑 카드 (접기/펼치기)
│   ├── SlotReel.tsx      # 가챠 슬롯머신 이모지 애니메이션
│   ├── LabeledSlider.tsx # (미사용, 잔존 파일)
│   └── ui/
│       ├── button.tsx    # CVA 기반 버튼
│       ├── badge.tsx     # 배지
│       └── separator.tsx # 구분선
├── data/
│   ├── types.ts          # Restaurant, Plan 타입 정의
│   ├── constants.ts      # GENRE_GROUPS 상수
│   └── filters.ts        # getMatches, getMatchingPlans 필터 함수
└── lib/
    ├── supabase.ts       # Supabase 클라이언트
    ├── data.ts           # getRestaurants(), getMaxPeople() — DB 쿼리
    └── utils.ts          # cn() 유틸
```

---

## DB 스키마 (Supabase)

### restaurants 테이블
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | integer PK | |
| name | text | 가게 이름 |
| name_jp | text | 일본어 이름 |
| address | text | |
| genre | text[] | 복수 장르 |
| smoking | text | |
| private_rental | boolean | 전세 가능 여부 |
| private_room | boolean | 개인실 여부 |
| lat, lng | double precision | 위치 (현재 미사용) |
| distance_km | double precision | |
| walk_minutes | integer | 도보 시간 |

### plans 테이블
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | bigint PK (auto) | |
| restaurant_id | integer FK | restaurants.id 참조 |
| name | text | 플랜명 (null 가능 — 優待 관련 항목은 name을 NULL로 처리) |
| price | integer | 엔화 |
| lunch | boolean | |
| dinner | boolean | |
| min_people | integer | |
| max_people | integer | |
| duration_hours | numeric | |

**데이터**: restaurants 82개, plans 194개

---

## 주요 로직

### 필터링 (`src/data/filters.ts`)
- `people === 0`이면 인원 필터 미적용 (텍스트 필드 비어있을 때)
- `walk_minutes > maxWalk`이면 제외
- 장르 멀티선택 (OR 조건)
- 런치/디너 필터

### 가챠 (`HomeClient.tsx`)
- `GACHA_COUNT = 3` → 최대 3개 랜덤 추첨
- SlotReel: 음식 이모지(🍣🍱🍜 등)가 75ms 간격으로 순환, 1.2s/1.8s/2.4s에 순서대로 멈춤
- 멈출 때 테두리 색만 변경 (scale 효과 없음)
- 결과 카드 3개 모두 collapsed 상태로 표시
- "마음에 안 들면 다시 돌려보세요" 문구는 카드 목록 맨 아래

### 데이터 페칭 (`page.tsx`)
```ts
export const dynamic = "force-dynamic"  // 빌드 타임 pre-render 방지 (Supabase 접근 불가)
const [restaurants, maxPeople] = await Promise.all([getRestaurants(), getMaxPeople()])
```

---

## 테마 (globals.css)
```css
@theme {
  --color-background: #fafaf9;
  --color-foreground: #111110;
  --color-card: #ffffff;
  --color-muted: #f4f3f0;
  --color-muted-foreground: #78716c;
  --color-border: #e6e4df;
  --color-primary: #111110;
  --color-primary-foreground: #fafaf9;
  --color-secondary: #f4f3f0;
  --color-accent: #ede9e3;
}
```
라이트 테마, 시스템 폰트, 이모지 미사용 원칙.

---

## 배포 방법

### GitHub 연동 후 (목표 상태)
```bash
cd ~/craft/hoesik-supabase
git add .
git commit -m "변경 내용"
git push  # → Vercel 자동 배포
```

### 수동 배포 (현재)
```bash
cd ~/craft/hoesik-supabase
pnpm install
npx vercel link   # 최초 1회
npx vercel deploy --prod
```

---

## 미완료 항목
- [ ] GitHub 레포 연동 (kyj-0109/hoesik-supabase) + Vercel 자동 배포 설정
- [ ] Google Maps API 연동 (나중에 추가 예정)
- [ ] 지도 기반 거리 필터 (현재는 walk_minutes 기준)

---

## 알려진 이슈 / 주의사항
- `@radix-ui/themes`는 제거됨 — 사용하지 말 것 (디자인 깨짐 원인이었음)
- Vercel 배포 시 환경변수가 없으면 빌드는 성공해도 런타임 에러 발생
- `優待` 포함 plans 4개 (id: 1, 69, 172, 190)는 name이 NULL — 가격만 표시됨
