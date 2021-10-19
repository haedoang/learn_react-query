### What is React-Query ? 
 - react에서 비동기 로직을 쉽게 다루게 해주는 라이브러리이다.
 - 서버 상태를 가져오고, 캐싱하고, 동기화하고, 업데이트하는 작업을 쉽개 해준다.
 - react 상태 관리는 클라이언트 상태를 관리하는데에 유용하지만 비동기 또는 서버 상태를 사용하는 것엔 어려움이 있음.
 
### 서버 상태 사용의 어려운 점
 - 제어하거나 소유하지 않은 위치에 원격으로 유지됨(소유권x)
 - 서버 데이터를 가져오기 위한 비동기 API가 필요함
 - 서버데이터는 공동 소유권을 의미하며 사용자가 모른느 사이 변경될 수 있음
 - 프로그램 내에서 오래된 데이터가 될 수 있음.
 
### 서버 상태에서 발생할 수 있는 문제점 
 - 캐싱
 - 동일한 데이터에 대한 요청을 단일 전송을 하는 경우
 - 백그라운드에서 오래된 데이터가 업데이트 될 수 있음(서버의 데이터는 변하기 때문에)
 - 데이터의 업데이트를 빠르게 반영해야한다.
 - 페이지네이션, 지연 로딩 데이터의 성능 최적화 
 - 서버 상태의 메모리 및 가비지 컬렉션 관리
 - 구조 공유(Structural Sharing)를 사용하여 쿼리 결과를 메모

### 그래서..? 
 - react-query는 서버 상태를 관리하기 좋은 라이브러리이다.
 - 별도의 구성없이 즉시 사용할 수 있고, 사용자 지정 설정이 가능함.

### 장점 
 - 코드의 간결화. (소스 참조)
 - 새로운 서버의 상태 데이터를 보다 쉽게 유지 관리할 수 있음
 - 어플리케이션의 속도와 응답성을 향상.
 - 메모리 성능 향상

### API List 
- [x] useQuery : fetch a query
- [x] useQueries : fetch a variable number of queries
- [ ] useInfiniteQuery : 
- [x] useMutation : fetch a query for update.
- [ ] useIsFetching : 
- [ ] QueryClient : 
- [ ] QueryClientProvider :  
- [ ] useQueryClient :  
- [ ] QueryCache :  
- [ ] MutationCache :  
- [ ] QueryObserver :  
- [ ] InfiniteQueryObserver :  
- [ ] QueriesObserver :
- [ ] QueryErrorResetBoundary :
- [ ] useQueryErrorResetBoundary :
- [ ] focusManager :
- [ ] onlineManager :
- [ ] setLogger : 
- [ ] hydration : 