import './RemoveModal.css'
import CustomButton from '../custom-button/CustomButton';

const RemoveModal = ({ deleteM, isLoading, handleDismiss }) => (
  <div className="container">
    <h4>Delete Log</h4>
    <p>Are you sure you want to delete this log?</p>
    <div className="button-container">
      <CustomButton onClick={deleteM} loading={isLoading} label='YES' color='red' />
      <CustomButton onClick={handleDismiss} color='green' label='NO' />
    </div>
  </div>
);

export default RemoveModal;
