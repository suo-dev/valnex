import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setIsSent(true);
  };
  return (
    <section className="contact-page">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>
            一緒に、学びの
            <br />
            <em>次の景色を。</em>
          </h2>
          <p>
            サービスについて、賛助企業制度について、そのほかのご相談もお気軽にお寄せください。
          </p>
          <div className="contact-note">
            <b>ご注意</b>
            <span>
              本フォームはサイトデモ用です。内容は実際には送信されません。
            </span>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={submit}>
            <label>
              お問い合わせ種別
              <select name="type">
                <option>一般のお問い合わせ</option>
                <option>賛助企業に関するお問い合わせ</option>
                <option>取材・協働に関するお問い合わせ</option>
                <option>その他</option>
              </select>
            </label>
            <label>
              お名前
              <input required name="name" placeholder="山田 花子" />
            </label>
            <label>
              メールアドレス
              <input
                required
                type="email"
                name="email"
                placeholder="hello@example.com"
              />
            </label>
            <label>
              お問い合わせ内容
              <textarea
                required
                name="message"
                rows="6"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </label>
            <Button type="submit">送信内容を確認する</Button>
          </form>
        </div>
      </div>
      {isSent && (
        <Modal
          title="送信内容を受け付けました"
          onClose={() => setIsSent(false)}
        >
          <p>
            お問い合わせありがとうございます。このフォームはデモのため、内容は送信されていません。
          </p>
          <Button type="button" onClick={() => setIsSent(false)}>
            閉じる
          </Button>
        </Modal>
      )}
    </section>
  );
}
