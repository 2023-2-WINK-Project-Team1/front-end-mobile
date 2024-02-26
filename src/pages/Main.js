import Layout from '../components/layout/Layout';

function Main() {
  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '1팀 화이팅',
  };

  return (
    <div>
      {/*<h1>1팀 화이팅 ~!</h1>*/}
      <Layout headerProps={headerProps} />
    </div>
  );
}

export default Main;
