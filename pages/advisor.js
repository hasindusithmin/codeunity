
export default function Advisor() {
    function onTelegramAuth(user) {
        console.log(user)
      }
    return (
        <div className="w3-content w3-section">
            <script async src="https://telegram.org/js/telegram-widget.js?19" data-telegram-login="codeunitybot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
        </div>
    )
}