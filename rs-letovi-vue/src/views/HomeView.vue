<script setup lang="ts">

</script>

<template>
    <div id="home">
        <h1 class="h3">Homepage</h1>
        <hr>
        <nav>
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>


        <!-- table-striped da budu naglasena imena vrsta i kolona-->
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">DESTINACIJA</th>
                    <th scope="col">NAZIV LETA</th>
                    <th scope="col">VREME</th>
                    <th scope="col">AKCIJE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Zagreb</td>
                    <td>YU 1234</td>
                    <td>29.02.2024. 18:00</td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">
                                A
                            </button>
                            <button type="button" class="btn btn-danger">
                                B
                            </button>

                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Zagreb</td>
                    <td>YU 1234</td>
                    <td>29.02.2024. 18:00</td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">
                                A
                            </button>
                            <button type="button" class="btn btn-danger">
                                B
                            </button>

                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Zagreb</td>
                    <td>YU 1234</td>
                    <td>29.02.2024. 18:00</td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">
                                A
                            </button>
                            <button type="button" class="btn btn-danger">
                                B
                            </button>

                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Zagreb</td>
                    <td>YU 1234</td>
                    <td>29.02.2024. 18:00</td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">
                                A
                            </button>
                            <button type="button" class="btn btn-danger">
                                B
                            </button>

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>



</template>
