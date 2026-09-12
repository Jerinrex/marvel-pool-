import './WhatsAppFab.css'

const WHATSAPP_NUMBER = '919019428806'
const WHATSAPP_MESSAGE = 'Hi! I just saw your website, shall we discuss more?'

export default function WhatsAppFab() {
  const href = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a className="whatsapp-fab" href={href} aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#F1F7F4">
        <path d="M17.6 6.3A8.9 8.9 0 0 0 12 4a8.9 8.9 0 0 0-7.7 13.4L3 21l3.7-1.2A8.9 8.9 0 0 0 12 21a8.9 8.9 0 0 0 5.6-15.7zm-5.6 13a7.4 7.4 0 0 1-3.8-1l-.3-.2-2.3.8.8-2.3-.2-.3A7.4 7.4 0 1 1 20 12a7.4 7.4 0 0 1-8 7.3zm4-5.5c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1s-.6.7-.8.9-.3.2-.5.1a6 6 0 0 1-1.8-1.1 6.6 6.6 0 0 1-1.2-1.5c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2 4.7 4.7 0 0 0 1 2.5 10.7 10.7 0 0 0 4.1 3.6c.6.2 1 .4 1.4.5a3.3 3.3 0 0 0 1.5.1 2.5 2.5 0 0 0 1.6-1.1c.2-.3.2-.6.1-.7z" />
      </svg>
    </a>
  )
}
