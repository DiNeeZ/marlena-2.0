import { RefObject, useEffect } from 'react';


function useOutsideClick (callback: () => void, ref: RefObject<HTMLElement> ) {

	function handleOutsideClick( e: MouseEvent ) {
		if( ref.current && !ref.current.contains(e.target as Node) ) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener('click', handleOutsideClick)
	})

}

export default useOutsideClick