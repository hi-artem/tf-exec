resource "local_file" "test_file" {
  content     = ""
  filename = "${path.module}/test.txt"
}