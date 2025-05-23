export default function fnErrorCodeMessage(params, message) {
  switch (params) {
    case 405:
      return 'Method Not Allowed, Please contact IT for support';
    case 400:
      return 'Please fill in all required fields';
    case 408:
      return 'Timeout! The process you requested is taking too long. Please try again later or contact us if the problem persists.';
    case 429:
      return 'Too Many Requests, please try again';
    case 500:
      return message ? (
        <p
          dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br>') }}
        />
      ) : (
        "There seems to be a problem with our server. We're working on it. Please try again later "
      );
    case 502:
      return message ? (
        <p
          dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br>') }}
        />
      ) : (
        "There seems to be a problem with our server. We're working on it. Please try again later "
      );
    case 504:
      return 'Timeout! The process you requested is taking too long. Please try again later or contact us if the problem persists.';
    case '405':
      return 'Method Not Allowed, Please contact IT for support';
    case '400':
      return 'Please fill in all required fields';
    case '408':
      return 'Timeout! The process you requested is taking too long. Please try again later or contact us if the problem persists.';
    case '429':
      return 'Too Many Requests, please try again';
    case '500':
      return message ? (
        <p
          dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br>') }}
        />
      ) : (
        "There seems to be a problem with our server. We're working on it. Please try again later "
      );
    case '502':
      return message ? (
        <p
          dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br>') }}
        />
      ) : (
        "There seems to be a problem with our server. We're working on it. Please try again later "
      );
    case '504':
      return 'Timeout! The process you requested is taking too long. Please try again later or contact us if the problem persists.';
    default:
      return (
        <p
          dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br>') }}
        />
      );
  }
}
