import React, { Fragment } from 'react'
import './Newsletter.css'

function Newsletter({value}) {
  return (
    <Fragment>
        <div className='d-flex newsLetter-section align-items-center'>
            <div className='newsLetter-img'>
                <img src={value.image}/>
            </div>
            <div  className='newsLetter-dis'>
                <h2>{value.Newsletterdis}</h2>
            </div>
            <div className='newsLetter-form'>
                <form method="post" className='newsLetterFrom'>
                <input type="email" name="item_meta[125]" value="" placeholder="Email address" className="formInput" />
                <button class="newsLetter-frm_button_submit" type="submit">{value.formButtotext}</button>
                </form>
            </div>
        </div>
    </Fragment>
  )
}

export default Newsletter
