import Head from 'next/head';
 
const Layout = (props) => (
  <div>
    <Head>
      <title>MATCHESFASHION.COM</title>
      <link rel="stylesheet" href="/_next/-/page/bootstrap.min.css"/>
    </Head>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;