import { StyleSheet, Dimensions } from 'react-native';

// const val = Dimensions.get("window").height < Dimensions.get("window").width ? Dimensions.get("window").height : Dimensions.get("window").width
const val = Dimensions.get("window").height
const val2 = Dimensions.get("window").width

export const stylesHeight = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#000',
	  padding: val / 80,
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	row: {
		flexDirection: 'row-reverse',
	},
	displayText: { color: "#FFFFFF", textAlign: 'center', textAlignVertical: 'center', margin: val / 80 },
	whiteText: { fontSize: val / 16, color: "#FFFFFF", textAlign: 'center', textAlignVertical: 'center' },
	blackText: { fontSize: val / 16, color: "#000000", textAlign: 'center', textAlignVertical: 'center' },
	orangeText: { fontSize: val / 16, color: "#FE9F0B", textAlign: 'center', textAlignVertical: 'center' },
	white: { backgroundColor: "#FFFFFF" },
	black: { backgroundColor: "#000000" },
	grey: { backgroundColor: "#A5A5A5" },
	space: { backgroundColor: "#333333" },
	orange: { backgroundColor: "#FE9F0B" },
	rounded: { borderRadius: "100%", width: val / 8, height: val / 8, margin: val / 80 },
	roundedZero: { borderRadius: val / 8, width: (val / 8) * 2 + 20, height: val / 8, margin: val / 80 },
});

export const stylesWidth = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#000',
	  padding: val2 / 80,
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	row: {
		flexDirection: 'row-reverse',
	},
	displayText: { color: "#FFFFFF", textAlign: 'center', textAlignVertical: 'center', margin: val2 / 80 },
	whiteText: { fontSize: val2 / 16, color: "#FFFFFF", textAlign: 'center', textAlignVertical: 'center' },
	blackText: { fontSize: val2 / 16, color: "#000000", textAlign: 'center', textAlignVertical: 'center' },
	orangeText: { fontSize: val2 / 16, color: "#FE9F0B", textAlign: 'center', textAlignVertical: 'center' },
	white: { backgroundColor: "#FFFFFF" },
	black: { backgroundColor: "#000000" },
	grey: { backgroundColor: "#A5A5A5" },
	space: { backgroundColor: "#333333" },
	orange: { backgroundColor: "#FE9F0B" },
	rounded: { borderRadius: "100%", width: val2 / 8, height: val2 / 8, margin: val2 / 80 },
	roundedZero: { borderRadius: val2 / 8, width: (val2 / 8) * 2 + 20, height: val2 / 8, margin: val2 / 80 },
});