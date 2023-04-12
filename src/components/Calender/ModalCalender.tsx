import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalCalender = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <ModalWrapper onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {children}
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: relative;
  width: 40rem;
  height: 20rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  font-size: 1.4rem;
  font-weight: 800;
`;
export default ModalCalender;
