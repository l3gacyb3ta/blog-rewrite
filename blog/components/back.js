import { useRouter } from 'next/router'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Back() {
	const router = useRouter();
	return (
    <div aria-label="Back">
  <FontAwesomeIcon onClick={() => router.back()} icon={faChevronLeft} />
  </div>
  )

}
