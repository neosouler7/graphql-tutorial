# graphql-tutorial
based on [Nomad Coder](https://nomadcoders.co/graphql-for-beginners)

### Problems solved by GraphQL
Over-fetching && Under-fetching
: 한 쿼리에서 내가 원하는 정보만 딱 얻을 수 있다.

### Creating a GQL Server with GraphQL Yoga
babel을 설치해야하는데 뭘까...
> yarn add graphql-yoga
>> yarn global add nodemon
>>> yarn global add babel-cli --ignore-engines
>>>> yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev

### Creating Query & Resolvers
Request -> Query(Schema) -> Resolver
. Query 로 스키마를 정의하고 Resolver로 데이터를 넣어주며
. 타입에 엄격하고
. 서버 구동되면, graphql playground 확인 가능하다.

### Extending the Schema
객체를 선언하고 그 객체 안의 값을 선택적으로 호출할 수 있다.

### Creating Queries with Arguments

### Defining Mutations

