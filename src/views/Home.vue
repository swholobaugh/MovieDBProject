<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="movie in movies" :key="movie.id" cols="3">
          <MovieCard :movie="movie" :imageURL="imageURL" />
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination v-model="page" color="green" :length="totalPages" @input="getMovies" />
      </div>
    </v-container>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
export default {
  name: 'Home',
  data() {
    return {
      movies: [],
      certifications: [],
      page: 1,
      totalPages: 0,
      configuration: {},
    }
  },
  computed: {
    imageURL() {
      return `${this.configuration.secure_base_url}${this.configuration.poster_sizes[this.configuration.poster_sizes.length - 1]}`
    },
  },
  created() {
    this.getMovies()
  },
  components: {
    MovieCard,
  },
  methods: {
    async getMovies() {
      const movies = await this.$axios(`discover/movie?page=${this.page}&certification_country=US&certification=G|PG|PG-13`)
      const certifications = await this.$axios('certification/movie/list')
      const configuration = await this.$axios('configuration')
      this.movies = movies.data?.results
      this.totalPages = movies.data?.total_pages
      this.certifications = certifications.data?.certifications.US
      this.configuration = configuration.data?.images
    },
  },
}
</script>