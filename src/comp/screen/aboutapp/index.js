import React, {
	Fragment,
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from "react";

import {
	useDisclosure,
	Box,
	Text,
	Flex,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Divider,
	useToast,
	Stack,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Code,
	Td,
	Link,
	TableContainer,
	Icon,
} from "@chakra-ui/react";

import { FaLinkedin, FaStackOverflow } from "react-icons/fa";

import { FiPackage } from "react-icons/fi";

import { AiFillLike } from "react-icons/ai";

import { BiLinkAlt } from "react-icons/bi";

import { connect } from "react-redux";

import lodash from "lodash";

import Actions from "../../redux/action";

const AboutAppSectionView = (props) => {
	const { title, children } = props;

	return (
		<>
		</>
	);
};

const AboutApp = forwardRef((props, ref) => {
	const { userConfig, userPref } = props;

	const [state, setState] = useState({});

	const updateState = (data) =>
		setState((preState) => ({ ...preState, ...data }));

	const { isOpen, onOpen, onClose } = useDisclosure();

	const libKeyTitleObj = {
		title: "Title",
		version: "Version",
		package: "Package",
		npmURL: "Package URL",
		url: "URL",
	};

	const libMasterObj = {
		react: {
			title: "React",
			version: "18.2.0",
			package: "react",
			npmURL: "https://www.npmjs.com/package/react",
			url: "https://github.com/facebook/react",
		},
		reactDom: {
			title: "React Dom",
			version: "18.2.0",
			package: "react-dom",
			npmURL: "https://www.npmjs.com/package/react-dom",
			url: "https://reactjs.org/",
		},
		chakraReact: {
			title: "Chakra React",
			version: "2.2.8",
			package: "@chakra-ui/react",
			npmURL: "https://www.npmjs.com/package/@chakra-ui/react",
			url: "https://chakra-ui.com/",
		},
		chakraIcons: {
			title: "Chakra Icons",
			version: "2.0.8",
			package: "@chakra-ui/icons",
			npmURL: "https://www.npmjs.com/package/@chakra-ui/icons",
			url: "https://github.com/chakra-ui/chakra-ui#readme",
		},
		chakraAutoComplete: {
			title: "Chakra AutoComplete Control",
			version: "5.1.4",
			package: "@choc-ui/chakra-autocomplete",
			npmURL: "https://www.npmjs.com/package/@choc-ui/chakra-autocomplete",
			url: "https://github.com/anubra266/choc-autocomplete#readme",
		},
		d3js: {
			title: "D3 - Data-Driven Documents",
			version: "7.6.1",
			package: "d3",
			npmURL: "https://www.npmjs.com/package/d3",
			url: "https://d3js.org/",
		},
		topoJSON: {
			title: "TopoJSON Client",
			version: "3.1.0",
			package: "topojson-client",
			npmURL: "https://www.npmjs.com/package/topojson-client",
			url: "https://github.com/topojson/topojson-client",
		},
		versor: {
			title: "Versor",
			version: "0.2.0",
			package: "versor",
			npmURL: "https://www.npmjs.com/package/versor",
			url: "https://github.com/Fil/versor",
		},
		geolib: {
			title: "Geolib",
			version: "3.3.3",
			package: "geolib",
			npmURL: "https://www.npmjs.com/package/geolib",
			url: "https://github.com/manuelbieh/geolib#readme",
		},
		lodash: {
			title: "lodash",
			version: "4.17.21",
			package: "lodash",
			npmURL: "https://www.npmjs.com/package/lodash",
			url: "https://lodash.com/",
		},
		reactIcons: {
			title: "React Icons",
			version: "4.4.0",
			package: "react-icons",
			npmURL: "https://www.npmjs.com/package/react-icons",
			url: "https://github.com/react-icons/react-icons#readme",
		},
		reactLiveClock: {
			title: "React Live Clock",
			version: "6.0.6",
			package: "react-live-clock",
			npmURL: "https://www.npmjs.com/package/react-live-clock",
			url: "https://github.com/pvoznyuk/react-live-clock",
		},
		reactMoment: {
			title: "React Moment",
			version: "1.1.2",
			package: "react-moment",
			npmURL: "https://www.npmjs.com/package/react-moment",
			url: "https://github.com/headzoo/react-moment#readme",
		},
		sunCalc: {
			title: "Sun Calc",
			version: "1.9.0",
			package: "suncalc",
			npmURL: "https://www.npmjs.com/package/suncalc",
			url: "https://github.com/mourner/suncalc",
		},
		redux: {
			title: "Redux",
			version: "4.2.0",
			package: "redux",
			npmURL: "https://www.npmjs.com/package/redux",
			url: "http://redux.js.org/",
		},
		reduxPersist: {
			title: "Redux Persist",
			version: "6.0.0",
			package: "redux-persist",
			npmURL: "https://www.npmjs.com/package/redux-persist",
			url: "https://github.com/rt2zz/redux-persist#readme",
		},
		timezoneLookup: {
			title: "Timezone Lookup",
			version: "6.1.25",
			package: "tz-lookup",
			npmURL: "https://www.npmjs.com/package/tz-lookup",
			url: "https://github.com/klinquist/tz-lookup",
		},
		placeDataBase: {
			title: "Countries States Cities Database",
			url: "https://github.com/dr5hn/countries-states-cities-database",
		},
	};

	const toast = useToast();

	/*  Life-cycles Methods */

	useEffect(() => {
		return () => {};
	}, []);

	useEffect(() => {}, [userConfig]);

	useEffect(() => {
		// preLoadSettings()
		// console.log("userPref: ", userPref)
	}, [userPref]);

	useImperativeHandle(ref, () => ({
		openModal: () => {
			onOpen();
		},
	}));

	/*  Public Interface Methods */

	/*  UI Events Methods   */

	/*  Server Request Methods  */

	/*  Server Response Methods  */

	/*  Server Response Handler Methods  */

	/*  Custom-Component sub-render Methods */

	const renderLinkButtonControl = (text, link) => {
		return (
			<Link
				href={`${link}`}
				passHref
				target="_blank"
			>
				<Button
					as="a"
					variant={"link"}
				>
					<Text
						as={"u"}
						fontSize={"md"}
					>{`${text}`}</Text>
				</Button>
			</Link>
		);
	};

	const renderAboutDeveloperSection = () => {
		return (
			<>
			</>
		);
	};

	const renderAboutLibrarySection = () => {
		return (
			<>
			</>
		);
	};

	const renderMasterAboutAppSection = () => {
		return (
			<></>
		);
	};

	const renderMasterContainer = () => {
		return (
			<>
				<Modal
					blockScrollOnMount={false}
					isOpen={isOpen}
					onClose={onClose}
					size={"4xl"}
					isCentered
					overflow={"hidden"}
					motionPreset={"slideInBottom"}
				>
					<ModalOverlay
						bg="blackAlpha.600"
						backdropFilter="blur(10px)"
					/>
					<ModalContent overflow={"hidden"}>
						<ModalHeader>About App</ModalHeader>
						<ModalCloseButton />
						<Divider />
						<ModalBody
							m={0}
							p={0}
							bg={"chakra-body-bg"}
						>
							{renderMasterAboutAppSection()}
						</ModalBody>
						<Divider />
						<ModalFooter>
							<Flex
								flex={1}
								justify={"flex-end"}
							>
								<Button onClick={onClose}>OK</Button>
							</Flex>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</>
		);
	};

	return renderMasterContainer();
});

const mapStateToProps = (state) => {
	return {
		userConfig: state.userConfig,
		userPref: state.userPref,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserConfig: (userConfig) =>
			dispatch(Actions.setUserConfig(userConfig)),
		setUserPref: (userPref) => dispatch(Actions.setUserPref(userPref)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
	forwardRef: true,
})(AboutApp);
