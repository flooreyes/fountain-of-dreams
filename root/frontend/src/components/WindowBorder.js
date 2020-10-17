import React, { useState, useEffect } from 'react';

const WindowBorder = ({
	title = 'terminal',
	type = 'light',
	titlebar = false,
	extraDecor = false,
	helperClasses = '',
	children,
}) => {
	const [contentWidth, setContentWidth] = useState(0);
	const [contentHeight, setContentHeight] = useState(0);
	const windowClass = [helperClasses, 'window', `window--${type}`].join(' ');
	let content = null;

	useEffect(() => {
		setContentWidth(content.getBoundingClientRect().width);
		setContentHeight(content.getBoundingClientRect().height);
	}, [content]);

	return (
		<div
			className={windowClass}
			ref={(div) => {
				content = div;
			}}
		>
			<div className="window__mask">
				{extraDecor && contentWidth > 80 && <div className="window__decor--horizontal"></div>}
				<div className="window__inner">
					<div className="window__decor--inner">
						{titlebar && (
							<div className="window__titlebar">
								<div className="window__titlebar__min"></div>
								<div className="window__titlebar__name">{title}</div>
								<div className="window__titlebar__exit"></div>
							</div>
						)}
						<div className="window__content">{children}</div>
					</div>
				</div>
				{extraDecor && contentHeight > 80 && <div className="window__decor--vertical"></div>}
			</div>
		</div>
	);
};

export default WindowBorder;
