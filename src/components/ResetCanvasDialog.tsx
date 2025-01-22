import "./ResetCanvasDialog.scss";

const ResetCanvasDialog = ({
  onReset,
  onClose,
}: {
  onReset: () => void;
  onClose: () => void;
}) => {
  return (
    <div className="dialog-overlay reset">
      <div className="dialog-container">
        <h2>Are you sure you want to clear the Canvas?</h2>
        <button onClick={onClose} className="close-btn">
          X
        </button>
        <div className="dialog-actions">
          <button onClick={onReset} className="ok-btn">
            Clear
          </button>
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetCanvasDialog;
