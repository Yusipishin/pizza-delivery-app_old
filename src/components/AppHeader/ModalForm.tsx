import Modal from "../UI/modal/Modal";
import InputMask from "react-input-mask";
import styles from "./style.module.scss";
import { memo } from "react";

interface Props {
  modalActive: boolean,
  setModalActive: (active: boolean) => void
}

const ModalForm = memo(({modalActive, setModalActive}: Props) => {
  return (
    <Modal active={modalActive} setActive={setModalActive}>
      <span className="text-yel text-4xl font-extrabold">
        Вход на сайт
      </span>
      <form action="#" method="post">
        <div className={styles.inputTel}>
          <label className="text-[#686466] font-semibold" htmlFor="post-tel">
            Номер телефона
          </label>
          <InputMask
            type="tel"
            id="post-tel"
            name="user_telephone"
            className={styles.tel}
            mask="+7 (999) 999-99-99"
            placeholder="+7 (999) 999-99-99"
          />
        </div>
        <div className="wrapper gap-6">
          <button
            name="submit"
            type="submit"
            className={`bg-yel ${styles.sendCode}`}
          >
            Выслать код
          </button>
          <p className={styles.continue}>
            Продолжая, вы соглашаетесь&nbsp;
            <a href="#" className="underline">
              со сбором и обработкой персональных данных и пользовательским
              соглашением
            </a>
          </p>
        </div>
      </form>
    </Modal>
  );
});

export default ModalForm;
