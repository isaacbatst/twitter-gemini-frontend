import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { hideTweetConfirmDelete } from "../../store/actions/modals";
import { requestDeleteTweet } from '../../store/actions/tweets'

export default function(props) {
  const dispatch = useDispatch();

  const show = useSelector(state => state.modals.tweetConfirmDelete.show);

  function handleClose(event) {
    dispatch(hideTweetConfirmDelete());
  }

  function handleDelete(event){
    dispatch(requestDeleteTweet(props.tweetID))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Atenção</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja realmente apagar esse tweet?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" id="" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
