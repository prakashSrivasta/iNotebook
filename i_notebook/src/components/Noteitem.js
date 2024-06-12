import React from 'react'

const Noteitem = (props) => {
    const {note} = props;
  return (
    <div className='col-md-4'>
        <div class="card my-3">
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi enim dolores ratione accusamus itaque doloremque consectetur, velit temporibus architecto fuga provident voluptatum veniam, distinctio adipisci totam amet inventore iste repellendus.</p>
  </div>
</div>
    </div>
  )
}

export default Noteitem;