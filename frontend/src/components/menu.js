// import ApiHelper from '../APIHelper.js'
// import React, { useEffect, useState } from 'react';

// import { darkSber } from '@sberdevices/plasma-tokens/themes';
// import { Button } from '@sberdevices/ui/components/Button/Button';
// import { Container } from '@sberdevices/plasma-ui/components/Grid';
// import { Image } from '@sberdevices/ui/components/Image/Image';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

// let currentId = 0;

// const styles = {
//     marginLeft: '20px',
//     color: 'red'
//   }

//  function Scene() {
//     const [page, setScene] = useState();
    
//     const fetchedData = async (id) => {
//         return await ApiHelper.getMenu(id);
//     }
    
//     useEffect(() => {
//         fetchedData(currentId).then((response) => {
//             console.log(response);
//             const { data } = response;
//             setScene(data);
//         })
//     }, []);

//     const moveTo = (nextId) => () =>  {
//         fetchedData(nextId).then((response) => {
//             const { data } = response;
//             setScene(data);
//         })
//     }    

//     if (page) {
//         return(
//             <Container styles={darkSber} >
//                 <Link  size="l" onClick={moveTo()}>
//                     {page[0].options.name}
//                 </Link>
//                 <Button  size="l" onClick={moveTo()}>
//                    {page[1].options.name}
//                 </Button>
//             </Container>);
//     } else {
//         return <h1>Nothing...</h1>
//     }
    
// }

// export default Scene;