import "./Text.css";
import { motion } from "framer-motion";

function Text() {
  return (
    <div className="wrapper">
      <motion.h3
        className="fade"
        animate={{ scale: 0.8, x: -60 }}
        transition={{ delay: 8, type: "tween" }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          K
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          r
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          i
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          s
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          h
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          n
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          a
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          A
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          i
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          i
        </motion.span>
      </motion.h3>
      <motion.div
        style={{ position: "fixed" }}
        animate={{
          x: [-150, -320, -80, -280, -80, -230, -80, -210, -110],
          y: [-650, -600, -550, -500, -450, -400, -320, -250, -168],
          rotate: [-20, 20, -20, 50, -20, 50, -20, 50, 0],
        }}
        transition={{ duration: 8 , ease: "easeInOut"}}
      >
        <motion.img
          animate={{ scale: 0.8 }}
          transition={{ delay: 8 }}
          className="img"
          src="data:image/png;base64,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"
          alt="feather"
        />
      </motion.div>
    </div>
  );
}

export default Text;
