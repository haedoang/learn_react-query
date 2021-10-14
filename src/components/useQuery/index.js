import { Container, Section, Button, Note, Code, Row } from '../Style'; 
import { useState } from 'react';
import { PostAPI } from '../../Api';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

const UseQuery = () => {
    const [ state, setState ] = useState(false);
    const id = 1;
    const {
        data,
        dataUpdatedAt,
        error,
        errorUpdatedAt,
        failureCount,
        isError,
        isFetched,
        isFetchedAfterMount,
        isFetching,
        isIdle,
        isLoading,
        isLoadingError,
        isPlaceholderData,
        isPreviousData,
        isRefetchError,
        isRefetching,
        isStale,
        isSuccess,
        refetch,
        remove,
        status,
    } = useQuery(['getDetail', id], () => PostAPI.getDetail(id).then(res => res.data), {
        enabled : state,
        //cacheTime : 5000,
        //initialData : , //초기 데이터 설정
        //initialDataUpdatedAt : //initialData last updated 
        refetchOnWindowFocus : true, //포커스가 다시 브라우저에 생길 경우 refetch 한다. 
        retry : 3, // failed query retry 
        staleTime : 5000 //ms 데이터가 오래된 것으로 간주할 시간을 지정 
        //isDataEqual,  
        // keepPreviousData,
        // notifyOnChangeProps,
        // notifyOnChangePropsExclusions,
        // onError,
        // onSettled,
        // onSuccess,
        // queryKeyHashFn,
        // refetchInterval,
        // refetchIntervalInBackground,
        // refetchOnMount,
        // refetchOnReconnect,
        // retryOnMount,
        // retryDelay,
        // select,
        // structuralSharing,
        // suspense,
        // useErrorBoundary,
    });

    useEffect(() => {
        console.log('render useQuery component');
    },[]);

    return (
        <Container>
            <h2>useQuery</h2>
            <h4>fetch a query </h4>
            <Section>
                <Note>
                    ex : <Code> useQuery(queryKey, queryFn, options)</Code>
                    <br /><br />
                    queryKey : will be hashed into a stable hash. <br/>
                    queryFn : Must return a promise that will either resolve data or throw an error. <br />
                </Note>
            </Section>
            <Section>
                <Row>
                    <Button onClick={() => setState(true)}>enable</Button> : query execute immediately.
                </Row>
                <Row>
                    <Button onClick={refetch}>refetch</Button> : refetch the query.
                </Row>
                <Row>
                    <Button onClick={remove}>remove</Button> : remove the query from the cache.
                </Row>
            </Section>

            <Section>
                <h5>options</h5>
                <Row>
                    <Note>
                        enabled : 즉시 실행 여부 <br/>
                        cacheTime : ms, 캐시 데이터가 메모리에 남아있는 시간을 설정, <br/>
                        initialData : 초기 데이터 설정 <br/>
                        initialDataUpdatedAt : initialData last updated <br/>
                        retry : failed query retry <br/>
                        staleTime : ms 데이터가 오래된 것으로 간주할 시간을 지정 <br/>
                        isDataEqual :  <br/>
                        keepPreviousData : data from previous query is returend <br/>
                        notifyOnChangeProps : <br/>
                        notifyOnChangePropsExclusions : <br/>
                        onError : <br/>
                        onSettled : <br/>
                        onSuccess : <br/>
                        queryKeyHashFn : <br/>
                        refetchInterva : refetch 주기 <br/>
                        refetchIntervalInBackground : 탭/창 백그라운드 동안 지속적으로 refetch할 주기를 설정 <br/>
                        refetchOnMount : 마운트 시 refetch 여부 / default - true, <br/>
                        refetchOnWindowFocus : 포커스가 다시 브라우저에 생길 경우 refetch 한다. <br/>
                        refetchOnReconnect : reconnect 시 fetch 여부 default - true <br/>
                        retryOnMount : fail query retry 여부 : default - true <br/>
                        retryDelay : ms, retry 시간 <br/>
                        select : <br/>
                        structuralSharing : <br/>
                        suspense : <br/>
                        useErrorBoundary : <br/>
                    </Note>
                </Row>
            </Section>
            <Section>
                <h5>return</h5>
                <Row>
                    data : { JSON.stringify(data) } | dataUpdatedAt : { dataUpdatedAt } | error : { error } | errorUpdatedAt : { errorUpdatedAt }
                </Row>
                <Row>
                    failureCount : { failureCount } | isError : { isError } | isFetched : { isFetched } | isFetchedAfterMount : { isFetchedAfterMount } 
                </Row>
                <Row>
                    isFetching : { isFetching } | isIdle : { isIdle } | isLoading : { isLoading } | isLoadingError : { isLoadingError }  
                </Row>
                <Row>
                    isPlaceholderData : { isPlaceholderData } | isPreviousData : { isPreviousData } | isRefetchError : { isRefetchError } 
                </Row> 
                <Row>
                    isRefetching : { isRefetching } | isStale : { isStale } | isSuccess : { isSuccess } | refetch : { refetch }  
                </Row>
                <Row>
                    remove : { remove } | status : { status }
                </Row>
            </Section>   
        </Container>


    )

}

export default UseQuery;