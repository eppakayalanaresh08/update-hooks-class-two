import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setComment] = useState('')

  //   const [comment, setTextComment] = useState({name: '', commentText: ''})
  const [setList, setUpdateList] = useState([])

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeComment = event => {
    setComment(event.target.value)
  }

  const onSubmitClick = event => {
    event.preventDefault()
    // setTextComment({name, commentText})
    const newComment = {
      id: uuidv4,
      name,
      commentText,
    }

    setUpdateList(prevState => [...prevState, newComment])

    setName('')
    setComment('')
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitClick}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {setList.map(eachObject => (
          <CommentItem commentDetails={eachObject} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
