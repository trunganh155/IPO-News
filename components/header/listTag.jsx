import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import IconHome from "../../public/images/icons/icon_home.svg";
import IconTag from "../../public/images/icons/icon_tag_left.svg";
import { HeaderData } from "../../utils/DataDemo/Header";
import styles from "./listTag.module.scss";
function ListTag(props) {
	const router = useRouter();
	const { asPath } = useRouter();
	const [showMenu, setShowMenu] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [isHeightHeader, setIsHeightHeader] = useState(0);
	const [isAsPath, setIsAsPath] = useState("/");
	useEffect(() => {
		if (asPath === "/") {
			setIsAsPath("/");
		} else {
			setIsAsPath(asPath.replace(/[^\w\s]/gi, ""));
		}
	}, [asPath]);

	const checkActive = (link) => {
		if (link.length === 1) {
			return link || "";
		} else {
			return link.replace(/[^\w\s]/gi, "");
		}
	};
	return (
		<>
			<div
				className={styles.menu_list + " " + "justify-content-xl-center"}
				onMouseLeave={() => setShowMenu(false)}
			>
				<ul
					className={
						styles.tag_menu +
						" " +
						"text-start d-flex justify-content-center m-0"
					}
				>
					{HeaderData.map((item, index) => {
						return (
							<li
								key={index}
								onMouseEnter={() => {
									setShowMenu(item.listTag && true);
									setIsHeightHeader(
										item.listTag === undefined
											? 0
											: item.listTag.length > 3
											? item.listTag.length * 60
											: item.listTag.length * 80
									);
									// && item.listTag.length > 2 ?  item.listTag.length * 60 : item.listTag.length * 80
								}}
								className="p-0"
							>
								<span
									className={
										isAsPath.includes(checkActive(item.tag))
											? styles.active +
											  " " +
											  "d-flex gap-2"
											: "d-flex gap-2"
									}
									onClick={() => router.push(item.link)}
								>
									{item.title === "TRANG CHỦ" && (
										<div
											className="mr-2"
											style={{
												width: "15px",
											}}
										>
											<Image
												src={IconHome}
												alt="icon"
												width={15}
												height={15}
											/>
										</div>
									)}
									{item.title}
									<i
										style={{ fontSize: "10px" }}
										className="fa fa-chevron-down d-flex align-items-center"
									></i>
								</span>
								{item.id < 9 && (
									<div className={styles.line_left}></div>
								)}
								<div
									className={styles.dropdown}
									style={{
										visibility: "visible",
										animationName: "fadeIn",
									}}
								>
									<ul className="text-left">
										{item.listTag &&
											item.listTag.map(
												(subItem, subIndex) => {
													return (
														<li
															key={subIndex}
															className={
																isAsPath.includes(
																	checkActive(
																		subItem.link
																	)
																)
																	? [
																			styles.active1,
																			styles.dropdown_item_1,
																	  ].join(
																			" "
																	  ) +
																	  " " +
																	  "gap-1 p-0"
																	: "gap-1 p-0"
															}
															onClick={() => {
																router.push(
																	subItem.link
																);
															}}
														>
															<div
																style={{
																	width:
																		subItem.tag ===
																			"Hồ sơ thương hiệu" ||
																		subItem.tag ===
																			"Theo dòng sự kiện" ||
																		subItem.tag ===
																			"Thông Tin Thị Trường"
																			? "70px"
																			: "90px",
																}}
															>
																{subItem.tag}
															</div>
															{subItem.tag && (
																<i
																	style={{
																		fontSize:
																			"10px",
																	}}
																	className="fa fa-chevron-right d-flex align-items-center"
																></i>
															)}
														</li>
													);
												}
											)}
									</ul>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			{showMenu && (
				<div
					className={styles.bg_dropdown}
					style={{
						height: showMenu ? `${isHeightHeader}px` : "",
					}}
				></div>
			)}
		</>
	);
}

export default ListTag;
