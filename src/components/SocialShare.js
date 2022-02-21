import { FacebookIcon, LineIcon } from 'react-share';
import { FacebookShareButton, LineShareButton } from 'react-share';

function SocialShare(props) {
  const { url, round } = props;

  return (
    <>
      <FacebookShareButton url={url}>
        <FacebookIcon round={true} />
      </FacebookShareButton>
      <LineShareButton url={url}>
        <LineIcon round={round} borderRadius={10} />
      </LineShareButton>
    </>
  );
}

export default SocialShare;
