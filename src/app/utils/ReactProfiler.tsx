import { Profiler } from 'react';

const onRenderCallback = (
  id: string,
  phase: 'mount' | 'update' | 'nested-update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
) => {
  console.log({
    // eslint-disable-line no-console
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
};

export function ReactProfiler({ id, children }: { id: string; children: React.ReactNode }) {
  if (process.env.NODE_ENV === 'development') {
    return (
      <Profiler id={id} onRender={onRenderCallback}>
        {children}
      </Profiler>
    );
  }

  return <>{children}</>;
}
