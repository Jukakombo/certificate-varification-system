import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteNews } from "../actions/news";

function Inbox() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.news);

  return (
    <div className="bg-pin-200 p-4 mt-2 rounded">
      <div className="">
        {contacts.map((contact) => (
          <div className="py-2 bg-blu-100 border-2 p-2" key={contact._id}>
            <div className=" flex justify-between  bg-pink-100 p-2">
              <p className=" bg-pink-100 ">
                Sender Name:{contact.firstName} {contact.lastName}
              </p>
              <p className=" bg-pink-100 ">
                Time:{moment(contact.createdAt).fromNow()}
              </p>
            </div>
            <p className="my-2 bg-pink-100 p-2">Sender Email:{contact.email}</p>
            <p className="my-2 bg-pink-100 p-2">Sender Phone:{contact.phone}</p>
            <p className="my-2 bg-pink-100 p-2">Message body:</p>
            <p className="my-2 bg-pink-100 p-2">{contact.message}</p>
            <button
              onClick={() => dispatch(deleteNews(contact._id))}
              className="text-center bg-red-500 text-white w-full py-2 rounded-md even:"
            >
              Delete Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inbox;
