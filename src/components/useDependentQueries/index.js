import { Container, Section, Button, Note, Code, Row } from '../Style'; 
import { useState } from 'react';
import { PostAPI } from '../../Api';
import { useQuery } from 'react-query';

const DependentQueries = () => {
    const [ state, setState ] = useState(false);
    const postId = 1;
    const { data: postData } =  useQuery(['postData', postId], () => PostAPI.getDetail(postId).then(res => res.data), {
        enabled : state
    });

    const resultPostId = postData?.id;

    const { data : commentsData } = useQuery(['commentData', resultPostId], () => PostAPI.getComment(resultPostId).then(res => res.data), {
        enabled : !!resultPostId
    });

    return (
        <Container>
            <h2>Dependent Queries</h2>
            <h4>실행하기 전에 완료해야 하는 이전 쿼리에 의존한다.</h4>
            <h5>A API가 완료된 결과를 가지고 B API를 호출한다.</h5>
            <Section>
                <Note>
                    ex : 
                    <Code> 
{`
 const { data: user } = useQuery(['user', email], getUserByEmail)
 
 const userId = user?.id
 
 // Then get the user's projects
 const { isIdle, data: projects } = useQuery(
   ['projects', userId],
   getProjectsByUser,
   {
     // The query will not execute until the userId exists
     enabled: !!userId,
   }
 )
`}                    
                    </Code>
                    <br /><br />
                    getUserByEmail에서 가져온 user의 id로 두번째 요청을 호출한다<br/>
                    예제는 post에서 가지고 온 postId를 가지고 comment API를 요청한다.
                </Note>
            </Section>
           

            <Section>
                <Row>
                    <Button onClick={() => setState(true)}>query execute!</Button>
                </Row>
            </Section>
            <Section>
                <h5>result</h5>
                <Row>
                    post data  : { JSON.stringify(postData)}
                </Row>
                <Row>
                    comments query result : { JSON.stringify(commentsData)}
                </Row>
            </Section> 
        </Container>
    )
};

export default DependentQueries;