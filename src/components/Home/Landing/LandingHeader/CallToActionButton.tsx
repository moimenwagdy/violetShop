import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const CallToActionButton = () => {
  const navigate = useNavigate();
  const navigateToProducts = () => {
    navigate("/products");
  };
  return (
    <motion.button
      onClick={navigateToProducts}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: [1.1, 1] }}
      transition={{ delay: 3.5 }}
      className="bg-darkViolet px-4 py-1 text-white mt-4 hover:bg-red-600">
      Shope Now
    </motion.button>
  );
};

export default CallToActionButton;
