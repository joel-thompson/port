import styled from '@emotion/styled';

const SomeComp = styled.div({
  backgroundColor: 'hotpink',

  ':hover': {
    backgroundColor: 'lightblue',
  },
});

export default function Home() {
  return (
    <>
      <SomeComp>
        <h2>Hello</h2>
      </SomeComp>
      <br />
      <p>My Name is Joel and this is my website</p>
    </>
  );
}
