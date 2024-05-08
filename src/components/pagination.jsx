import React from 'react'
export default function Pagination(props) {
    const {pages,selectedPage,handleSelectedPage} = props;

  return (
    <div className="d-flex justify-content-center my-4">
        {pages.map(page=><button onClick={()=>handleSelectedPage(page)} className= {`btn mx-1 ${selectedPage===page ?"buttonPagenation" : ""}   ButtonPrimary`} key={page}>{page}</button>)}
    </div>
  )
}
