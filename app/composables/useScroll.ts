/**
 * Composable for scroll-related state:
 * - scrollY: current scroll position
 * - scrollProgress: 0-100 progress through the page
 * - isScrolled: whether user has scrolled past threshold
 */
export const useScroll = () => {
    const scrollY = ref(0)
    const scrollProgress = ref(0)
    const isScrolled = ref(false)

    const handleScroll = () => {
        scrollY.value = window.scrollY
        isScrolled.value = window.scrollY > 50

        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        scrollProgress.value = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return { scrollY, scrollProgress, isScrolled }
}
