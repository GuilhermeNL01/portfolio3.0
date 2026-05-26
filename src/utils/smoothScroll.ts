let animationFrameId = 0;
let restoreScrollBehavior: (() => void) | null = null;

const easeInOutCubic = (progress: number) =>
  progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

const getTargetTop = (target: HTMLElement) => {
  const styles = window.getComputedStyle(target);
  const rootStyles = window.getComputedStyle(document.documentElement);
  const scrollMarginTop = parseFloat(styles.scrollMarginTop);
  const scrollPaddingTop = parseFloat(rootStyles.scrollPaddingTop);
  const offset =
    Number.isNaN(scrollMarginTop) || scrollMarginTop === 0 ? scrollPaddingTop : scrollMarginTop;

  return target.getBoundingClientRect().top + window.scrollY - (Number.isNaN(offset) ? 0 : offset);
};

const forceInstantProgrammaticScroll = () => {
  if (restoreScrollBehavior) return;

  const htmlScrollBehavior = document.documentElement.style.scrollBehavior;
  const bodyScrollBehavior = document.body.style.scrollBehavior;

  document.documentElement.style.scrollBehavior = 'auto';
  document.body.style.scrollBehavior = 'auto';
  restoreScrollBehavior = () => {
    document.documentElement.style.scrollBehavior = htmlScrollBehavior;
    document.body.style.scrollBehavior = bodyScrollBehavior;
    restoreScrollBehavior = null;
  };
};

export const smoothScrollToElement = (target: HTMLElement, onComplete?: () => void) => {
  if (animationFrameId) {
    window.cancelAnimationFrame(animationFrameId);
  }

  forceInstantProgrammaticScroll();

  const startY = window.scrollY;
  const targetY = Math.max(0, getTargetTop(target));
  const distance = targetY - startY;
  const duration = Math.min(1200, Math.max(700, Math.abs(distance) * 0.5));
  const startTime = window.performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo({
      top: startY + distance * easedProgress,
      behavior: 'auto'
    });

    if (progress < 1) {
      animationFrameId = window.requestAnimationFrame(animate);
      return;
    }

    animationFrameId = 0;
    restoreScrollBehavior?.();
    onComplete?.();
  };

  animationFrameId = window.requestAnimationFrame(animate);
};

export const smoothScrollToId = (id: string, updateHash = true) => {
  const target = document.getElementById(id);
  if (!target) return;

  smoothScrollToElement(target, () => {
    if (updateHash) {
      window.history.pushState(null, '', `#${encodeURIComponent(id)}`);
    }
  });
};

export const cancelSmoothScroll = () => {
  if (animationFrameId) {
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = 0;
  }

  restoreScrollBehavior?.();
};
