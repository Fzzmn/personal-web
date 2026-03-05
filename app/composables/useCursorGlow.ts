/**
 * Composable for custom cursor glow effect.
 * Tracks mouse position and applies it to a glow element.
 */
export const useCursorGlow = () => {
    const cursorX = ref(0)
    const cursorY = ref(0)
    const isVisible = ref(false)

    const handleMouseMove = (e: MouseEvent) => {
        cursorX.value = e.clientX
        cursorY.value = e.clientY
        isVisible.value = true
    }

    const handleMouseLeave = () => {
        isVisible.value = false
    }

    onMounted(() => {
        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        document.addEventListener('mouseleave', handleMouseLeave)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseleave', handleMouseLeave)
    })

    return { cursorX, cursorY, isVisible }
}
