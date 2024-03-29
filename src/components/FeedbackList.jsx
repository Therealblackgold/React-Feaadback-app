import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  //   console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet!</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, id) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  /***** Without Animation ******/
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item, id) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
