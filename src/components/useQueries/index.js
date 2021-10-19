import { Container, Section, Note, Code, Row } from '../Style'; 
import { PostAPI } from '../../Api';
import { useQueries } from 'react-query';
import { useEffect } from 'react';

const UseQueries = () => {
    const id1 = 1;
    const id11 = 11;

    const result = useQueries([
        {
            queryKey : ['post1', id1], queryFn : () => PostAPI.getDetail(id1).then(res => res.data),
        },
        {
            queryKey : ['post11', id11], queryFn : () => PostAPI.getDetail(id11).then(res => res.data),
        }
    ]);

    useEffect(() => {
        console.log('render useQueries component');
    },[]);

    return (
        <Container>
            <h2>useQueries</h2>
            <h4>fetch a variable number of queries </h4>
            <Section>
                <Note>
                    ex : <Code> useQueries([
                        ｛[ 'queryName', param], queryFn ｝, 
                        ｛[ 'queryName2', param2], queryFn2 ｝, 
                        ])</Code>
                    <br /><br />
                    queryKey : will be hashed into a stable hash. <br/>
                    queryFn : Must return a promise that will either resolve data or throw an error. <br />
                </Note>
            </Section>
            <Section>
 
            </Section>

            <Section>
                <h5>options</h5>
                <Row>
                    <Note>
 
                    </Note>
                </Row>
            </Section>
            <Section>
                <h5>return</h5>
                <h4>id : {id1} </h4>
                <Row>
                    data : { JSON.stringify(result[0].data) } | dataUpdatedAt : { result[0].dataUpdatedAt } | error : { result[0].error } | errorUpdatedAt : { result[0].errorUpdatedAt }
                </Row>
                <Row>
                    failureCount : { result[0].failureCount } | isError : { result[0].isError } | isFetched : { result[0].isFetched } | isFetchedAfterMount : { result[0].isFetchedAfterMount } 
                </Row>
                <Row>
                    isFetching : { result[0].isFetching } | isIdle : { result[0].isIdle } | isLoading : { result[0].isLoading } | isLoadingError : { result[0].isLoadingError }  
                </Row>
                <Row>
                    isPlaceholderData : { result[0].isPlaceholderData } | isPreviousData : { result[0].isPreviousData } | isRefetchError : { result[0].isRefetchError } 
                </Row> 
                <Row>
                    isRefetching : { result[0].isRefetching } | isStale : { result[0].isStale } | isSuccess : { result[0].isSuccess } | refetch : { result[0].refetch }  
                </Row>
                <Row>
                    remove : { result[0].remove } | status : { result[0].status }
                </Row>
                <br/><br/>
                <h4>id : {id11} </h4>
                <Row>
                    data : { JSON.stringify(result[1].data) } | dataUpdatedAt : { result[1].dataUpdatedAt } | error : { result[1].error } | errorUpdatedAt : { result[1].errorUpdatedAt }
                </Row>
                <Row>
                    failureCount : { result[1].failureCount } | isError : { result[1].isError } | isFetched : { result[1].isFetched } | isFetchedAfterMount : { result[1].isFetchedAfterMount } 
                </Row>
                <Row>
                    isFetching : { result[1].isFetching } | isIdle : { result[1].isIdle } | isLoading : { result[1].isLoading } | isLoadingError : { result[1].isLoadingError }  
                </Row>
                <Row>
                    isPlaceholderData : { result[1].isPlaceholderData } | isPreviousData : { result[1].isPreviousData } | isRefetchError : { result[1].isRefetchError } 
                </Row> 
                <Row>
                    isRefetching : { result[1].isRefetching } | isStale : { result[1].isStale } | isSuccess : { result[1].isSuccess } | refetch : { result[1].refetch }  
                </Row>
                <Row>
                    remove : { result[1].remove } | status : { result[1].status }
                </Row>
            </Section>   
        </Container>


    );

}

export default UseQueries;