import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Listpage from './listpage';

const Index = (props) => (
  <Layout>
   <Listpage list={props.data}/>
    <style jsx global>{`
      body { 
        background: #ffffff;
        font: 11px menlo;
        color: #000000;
        font-family: Trebuchet MS;
        text-align: center;
      }
      .div_header {
        width:90%;
        margin: 0 auto;
        padding-bottom:20px;
    }
      .div_line {
          height:2px;
          width:90%;
          margin: 0 auto;
          background: #666666;
      }
      .padding_top20 {
        padding-top:40px;
      }
      .div_item {
       margin:20px;
       float:left;
      }
      a {
        color: #000;
        text-decoration:none;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  
  const res = await fetch('https://www.matchesfashion.com/nms/ajax/p/1095470,1095483,1095472,109546');
  const data = await res.json();

  return {
    data: data
  };
}

export default Index;

