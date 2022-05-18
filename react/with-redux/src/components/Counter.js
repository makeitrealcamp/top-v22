import { connect } from "react-redux";

const Counter = ({ count }) => {
  return <h2>{count}</h2>;
};

// function connect(mapStateToProps, mapDispatchToProps){
//   const store = mapStateToProps(reduxStore)

//   return (Component) => {
//     return (props) => {
//       {...store}
//       {...props}
//     }
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };

const mapStateToProps = ({ count }) => {
  return { count };
};

export default connect(mapStateToProps)(Counter);
