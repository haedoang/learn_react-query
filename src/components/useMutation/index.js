import { Container, Section, Button, Note, Code, Row } from '../Style'; 
import { PostAPI } from '../../Api';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import { useEffect } from 'react';

const UseMutation = () => {
    const queryClient = useQueryClient();
    const { isLoading : useQueryLoading, error : useQueryError , data : useQueryData } 
            = useQuery('getDetailTest1', () =>  { console.log('call useQuery api'); return PostAPI.getDetail(1).then(res=> res.data)});
    const {
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isPaused,
        isSuccess,
        mutate,
        mutateAsync,
        reset,
        status,
      } =
    useMutation(PostAPI.savePost, {
        onSuccess : () => {
            console.log('success callback'); 
            queryClient.invalidateQueries('getDetailTest1', {exact : true});
        },
        onMutate : (obj) => {
            console.log('onMutate')
            console.log('onMutate has mutate params', obj);
        },
        onError : (err) => {
            console.log('onError');
            console.error('err', err);
        },
        onSettled : (data, error, variables, onMutateValue) => {
            console.log("onSettled");
            console.log(data, error, variables, onMutateValue);
        },
        retry  : 5,
        retryDelay : 1000,
        useErrorBoundary : false // 렌더 단계에서 오류를 발생시키고 가장 가까운 오류 경계로 전파하려는 경우
    });

    useEffect(() => {
        console.log('render useMutation component');
    },[]);

    const handleMutate = () => {
        mutate({
            "userId": 1,
            "id": 1,
            "title": "1",
            "body": "updatebody"
        });
    }
    return (
        <Container>
            <h2>useMutation</h2>
            <h4>fetch a query </h4>
            <Section>
                <Note> 
                    ex ) : <Code>useMutation(mutationFn,｛ mutationKey, onError, onMutate, onSettled, onSuccess, useErrorBoundary ｝)</Code>
                    <br /><br />
                    mutationFn : (variables) ⇒ Promise,  function that async task and return promise
                    
                </Note>
            </Section>
            <Section>
                <Row>
                    <Button onClick={() => handleMutate()}>mutate</Button> : mutate query.
                </Row>
                <Row>
                    <Button onClick={reset}>reset</Button> : reset mutation.
                </Row>
                <Row>
                    {/* <Button onClick={remove}>remove</Button> : remove the query from the cache. */}
                </Row>
            </Section>

            <Section>
                <h5>options</h5>
                <Row>
                    <Note>
                        onMutate : mutate() 실행되기 전에 실행, mutate가 받을 parameter를 그대로 가지고있음.
                                   성공하기를 희망하여 리소스를 낙관적 업데이트를 수행할 때 유용하다. <br/>
                        onSuccess :  mutate() 성공 시 호출되는 결과를 전달할 때 실행됨 <br/>
                        onSettled : mutate() 성공 또는 에러를 통과할 시 작동됨 
                    </Note>
                </Row>
                <h5>return</h5>
                <Row>
                    <Note>
                        mutate : trigger <br />
                        mutateAsync : return promise <br /> 
                        status : idle | loading | error | success <br />
                        data :
                        error : 
                        reset : reset the mutation, mutation status 가 idle로 초기화된다.
                    </Note>
                </Row>
            </Section>
            <Section>
                <h5>useQuery return</h5>
                <Row>isLoading : {JSON.stringify(useQueryLoading)}</Row>
                <Row>data : {useQueryLoading ? "loading.." : JSON.stringify(useQueryData)}</Row>
                <Row>error : {JSON.stringify(useQueryError)}</Row>
            </Section> 
            <Section>
                <h5>mutation return</h5>
                <Row>data : {JSON.stringify(data?.data)}</Row>
                <Row>error : {JSON.stringify(error)}</Row>
                <Row>isIdle : {JSON.stringify(isIdle)}</Row>
                <Row>isLoading : {JSON.stringify(isLoading)}</Row>
                <Row>isPaused : {JSON.stringify(isPaused)}</Row>
                <Row>isSuccess : {JSON.stringify(isSuccess)}</Row>
                <Row>status : {status}</Row>
            </Section>   
        </Container>


    )

}

export default UseMutation;