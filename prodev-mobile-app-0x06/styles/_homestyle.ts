// styles/_homestyle.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 56,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  searchControl: {
    fontSize: 12,
    fontWeight: "400",
    color: "#717171",
    marginTop: 4,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 24,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };