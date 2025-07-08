import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  SectionList,
  StyleSheet,
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView, // <-- AGREGA ESTA LÍNEA
} from "react-native";

const CATEGORIES = [
  { label: "Ficción", value: "fiction" },
  { label: "Historia", value: "history" },
  { label: "Tecnología", value: "technology" },
];

export default function App() {
  const [category, setCategory] = useState(CATEGORIES[0].value);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDesc, setShowDesc] = useState({}); // { [bookId]: true/false }

  useEffect(() => {
    setLoading(true);
    setError(null);

    async function fetchManyBooks() {
      let allBooks = [];
      for (let i = 0; i < 5; i++) {
        // 5 páginas de 40 = 200 libros
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40&startIndex=${
            i * 40
          }`
        );
        const data = await res.json();
        if (data.items) allBooks = allBooks.concat(data.items);
        if (!data.items || data.items.length < 40) break;
      }
      setBooks(allBooks);
      setLoading(false);
    }

    fetchManyBooks().catch(() => {
      setError("Error de conexión");
      setLoading(false);
    });
  }, [category]);

  // Agrupa los libros por autor, solo autores con 2 o más libros
  function groupByAuthor(books) {
    const grouped = {};
    books.forEach((item) => {
      const authors = item.volumeInfo.authors || ["Autor desconocido"];
      authors.forEach((author) => {
        if (!grouped[author]) grouped[author] = [];
        grouped[author].push(item);
      });
    });
    return Object.keys(grouped)
      .filter((author) => grouped[author].length >= 2)
      .map((author) => ({
        title: author,
        data: grouped[author],
      }));
  }

  const sections = groupByAuthor(books);

  // Maneja mostrar/ocultar descripción
  const handlePress = (id) => {
    setShowDesc((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Libros por Categoría</Text>
      <View style={styles.categoryRow}>
        {CATEGORIES.map((cat) => (
          <Text
            key={cat.value}
            onPress={() => setCategory(cat.value)}
            style={[
              styles.categoryButton,
              category === cat.value && styles.categoryButtonActive,
              category === cat.value
                ? styles.categoryButtonTextActive
                : styles.categoryButtonText,
            ]}
          >
            {cat.label}
          </Text>
        ))}
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePress(item.id)}>
              <View style={styles.item}>
                {item.volumeInfo.imageLinks?.thumbnail && (
                  <Image
                    source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                    style={{ width: 60, height: 90, marginRight: 10 }}
                  />
                )}
                <View style={{ flex: 1 }}>
                  <Text style={styles.nombre}>{item.volumeInfo.title}</Text>
                  <Text style={{ fontSize: 12 }}>
                    {item.volumeInfo.publisher}
                  </Text>
                  {showDesc[item.id] && (
                    <View style={{ marginTop: 4, maxHeight: 80 }}>
                      <ScrollView
                        style={{ maxHeight: 80 }}
                        showsVerticalScrollIndicator={true}
                      >
                        <Text style={{ fontSize: 12 }}>
                          {item.volumeInfo.description
                            ? item.volumeInfo.description
                            : "Sin descripción"}
                        </Text>
                      </ScrollView>
                    </View>
                  )}
                </View>
              </View>
            </Pressable>
          )}
          ListEmptyComponent={
            error ? (
              <Text style={{ color: "red" }}>{error}</Text>
            ) : (
              <Text>No hay autores con 2 o más libros en esta categoría.</Text>
            )
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 12,
    textAlign: "center",
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
    gap: 8,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: "#eee",
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#81b0ff",
    fontWeight: "bold",
    fontSize: 16,
  },
  categoryButtonActive: {
    backgroundColor: "#81b0ff",
  },
  categoryButtonText: {
    color: "#333",
  },
  categoryButtonTextActive: {
    color: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 4,
    borderRadius: 5,
    flexDirection: "row",
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
