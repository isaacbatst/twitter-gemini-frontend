import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { hideTweetConfirmDelete } from "../../store/actions/tweets";
import { requestDeleteTweet } from "../../store/actions/tweets";
import LoadingSpinner from "../LoadingSpinner";

export default function() {
  const dispatch = useDispatch();

  const showConfirmDeleteModal = useSelector(
    state => state.tweets.showConfirmDeleteModal
  );

  const isDeleting = useSelector(state => state.tweets.isDeleting);

  const deletingTweetID = useSelector(state => state.tweets.deletingTweetID);

  function handleClose(event) {
    dispatch(hideTweetConfirmDelete());
  }

  function handleDelete(event) {
    dispatch(requestDeleteTweet(deletingTweetID));
  }

  return (
    <Modal show={showConfirmDeleteModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Atenção</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja realmente apagar esse tweet?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" id="" onClick={handleClose}>
          Não
        </Button>
        <Button variant="danger" disabled={isDeleting} onClick={handleDelete}>
          {isDeleting ? <LoadingSpinner /> : "Sim"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
